import React from 'react'
import { Link } from 'gatsby'

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

const AvataImg = ({ src = '', alt = '' }) =>
  <Link to={'/'}>
    <img
      className='img-circle'
      src={src}
      alt={alt}
    />
  </Link>

const NickName = ({ name = '', to = '/' }) =>
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

const NameCard = ({ cardMode = true }) => {
  const cardModeClass = cardMode ? 'simple-card' : ''

  return (
    < div className={`card-item ${cardModeClass}`} >
      <div className={'card-img-container'}>
        <AvataImg src={avataImg.src} alt={avataImg.alt} />
      </div>

      <div className={'card-content-container'}>
        <NickName {...nickName} />
        <Presentation text={text} />
        <SocialBox />
        {!cardMode && <ScrollIcon />}
      </div>
    </div >
  )
}


export default NameCard