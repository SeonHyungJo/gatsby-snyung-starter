const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

const AboutMeTemplate = path.resolve(`src/template/aboutme/index.jsx`)
const PostTemplate = path.resolve(`src/template/blog-post/index.jsx`)
const pagesComponent = path.resolve(`src/template/post-list/index.jsx`)

const getPostsQuery = (graphql, categoryName) => graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { eq: "${categoryName}" } } }
      ) {
        edges {
          node {
            html
            id
            timeToRead
            frontmatter {
              date(formatString: "YYYY/MM/DD")
              path
              tags
              title
              category
            }
          }
        }
      }
    }
  `)

const createPostPages = (createPage, graphql, categoryName) =>
  getPostsQuery(graphql, categoryName).then(result => {
    if (result.errors) Promise.reject(result.errors)

    CreateCommonPage(createPage, result.data.allMarkdownRemark.edges, categoryName)
  })


const CreateCommonPage = (createPage, posts, categoryName) => {
  const limit = 5
  const maxPageNum = Math.ceil(posts.length / limit)

  Array.from({ length: maxPageNum }).forEach((_, i) => {
    const pagePath = i === 0 ? '' : i
    const path = `/${categoryName}/${pagePath}`
    const next = i === maxPageNum - 1 ? '' : i + 1
    const prev = i === 0 ? '' : i === 1 ? 0 : i - 1

    createPage({
      path: path,
      component: pagesComponent,
      context: {
        limit,
        skip: i * limit,
        prev,
        next,
        maxPageNum,
        category : categoryName
      }
    })
  })

  // blog - post, blog - article pages
  if (posts.length > 0) {
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? null : posts[index - 1].node
      const next = index === posts.length - 1 ? null : posts[index + 1].node

      createPage({
        path: node.frontmatter.path,
        component: PostTemplate,
        context: {
          limit,
          prev,
          next,
          category : categoryName
        }
      })
    })
  }
}

const createAboutme = (createPage, graphql, categoryName) =>
  getPostsQuery(graphql, categoryName).then(result => {
    if (result.errors) Promise.reject(result.errors)
    const post = result.data.allMarkdownRemark.edges

    // Aboutme Page
    if (post.length === 1) {
      createPage({
        path: post[0].node.frontmatter.path,
        component: AboutMeTemplate,
        context: {
        }
      })
    }
  })

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  await createPostPages(createPage, graphql, 'post')
  await createPostPages(createPage, graphql, 'article')
  await createAboutme(createPage, graphql, 'aboutme')
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}