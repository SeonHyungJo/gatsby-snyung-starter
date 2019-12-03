import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { avataImg, nickName, text } from 'data/nameCard'
import ScrollIcon from 'component/scroll-icon'
import {
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from 'component/social-icon'

import './index.scss'

const AvataImg = (fixed) =>
  <Link to={'/'}>
    <Image
      className='img-circle'
      fixed={fixed}
    />
  </Link>

const NickName = ({ name = '', to = '/aboutme' }) =>
  <a href={to} >
    <div className='nick-name'>{`@ ${name}`}</div>
  </a>

const SocialBox = ({ snsList = [] }) =>
  <div className='sns-list'>
    <div className='sns-item'>
      <EmailIcon />
    </div>
    <div className='sns-item'>
      <FacebookIcon />
    </div>
    <div className='sns-item'>
      <GithubIcon />
    </div>
    <div className='sns-item'>
      <InstagramIcon />
    </div>
    <div className='sns-item'>
      <LinkedinIcon />
    </div>
    <div className='sns-item'>
      <TwitterIcon />
    </div>
    <div className='sns-item'>
      <YoutubeIcon />
    </div>
  </div>

const Presentation = ({ text = 'Hello My Blog Template' }) =>
  <div className='presentation'>{text}</div>

const NameCard = ({ cardMode }) => (
  <StaticQuery
    query={cardQuery}
    render={(data) => {
      return (
        <div className={`card-item ${cardMode}`} >
          <div className={'card-img-container'}>
            <AvataImg {...data.avatar.childImageSharp.fixed} />
          </div>

          <div className={`card-content-container`}>
            <NickName {...nickName} />
            <Presentation text={text} />
            <SocialBox />
            {!cardMode && <ScrollIcon />}
          </div>
        </div >
      )
    }}
  />
)

const cardQuery = graphql`
  query cardQuery {
    avatar: file(absolutePath: { regex: "/assets/cardAvatar.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default NameCard



