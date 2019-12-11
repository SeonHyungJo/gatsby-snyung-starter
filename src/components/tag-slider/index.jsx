import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import TagSlider from 'gatsby-tag-slider'

import './index.scss'

const ALL = "All"

const useTags = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(
    graphql`
      query { allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC },
        filter: {frontmatter: {category: {eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
    `
  )

  const tagList = edges.reduce((acc, { node }) => {
    node.frontmatter.tags.forEach(tag => acc[tag] = {
      id: tag,
      name: tag,
      selected: false
    })
    return acc
  }, {})

  return tagList
}

const Slider = ({ setFilter }) => {
  const taglist = useTags()
  const allTaglist = {
    [ALL]: {
      id: ALL,
      name: ALL,
      selected: true
    },
    ...taglist
  }
  const [tagList, setTagList] = useState(allTaglist)

  useEffect(() => {
    setFilter(() =>
      Object.values(tagList).reduce((acc, tagValue) => {
        tagValue.selected && tagValue.id !== ALL && acc.push(tagValue.name)
        return acc
      }, []))
  }, [tagList])

  const selectHandle = (id) => {
    setTagList((prevState) => {
      if(id == ALL){
        Object.keys(prevState).map((key) => {
          prevState[key] = {
            ...prevState[key],
            selected : false
          }
        })
      }else{
        prevState[ALL].selected = false
        const list = Object.values(prevState).filter((values) => values.selected == true)

        list.length == 1 && list[0].id === id && (prevState[ALL].selected = true)
      }

      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          selected: !prevState[id].selected
        }
      }
    })
  }

  return (
    <TagSlider tags={tagList} selectHandle={selectHandle} />
  )
}

export default Slider;
