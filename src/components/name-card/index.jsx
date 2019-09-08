import React from "react"
import { Link } from 'gatsby'

import { avataImg, nickName, text } from "data/nameCard"
import { 
  EmailIcon, 
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon 
} from 'component/social-icon'

import "./index.scss"

const AvataImg = ({ src = '', alt = '' }) =>
  <Link to={'/'}>
    <img
      className="img-circle"
      src={src}
      alt={alt}
    />
  </Link>

/* Nick Name */
const NickName = ({ nickName = '' }) =>
  <div className="nick-name">{nickName}</div>

/* SNS */
const SocialBox = ({ snsList = [] }) =>
  <div className="sns-list">
    <div className="sns-item">
      <EmailIcon />
    </div>
    <div className="sns-item">
      <FacebookIcon />
    </div>
    <div className="sns-item">
      <GithubIcon />
    </div>
    <div className="sns-item">
      <InstagramIcon />
    </div>
    <div className="sns-item">
      <LinkedinIcon />
    </div>
    <div className="sns-item">
      <TwitterIcon />
    </div>
    <div className="sns-item">
      <YoutubeIcon />
    </div>
  </div>

/* Title */
const Presentation = ({ text = "Hello My Blog Template" }) =>
  <div className="presentation">{text}</div>

const NameCard = () =>
  <div className="card-container" >
    <div className="card-item">
      <AvataImg src={avataImg.src} alt={avataImg.alt} />
      <NickName nickName={nickName} />
      <Presentation text={text} />
      <SocialBox />
    </div>
  </div >

export default NameCard
