import React, { Suspense } from "react"
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

import { LinkButton } from "component/Button"
import { navMenu } from "data/navMenu"

import "style/index.scss"

/* Main Image */
const MainImg = ({ src = "https://avatars2.githubusercontent.com/u/24274424?s=460&v=4", alt = "MainImge" }) =>
  <LinkButton to="/" customClass="img">
    <img
      className="img-circle"
      src={src}
      alt={alt}
    />
  </LinkButton>

/* Nick Name */
const NickName = ({ nickName = "sNyung" }) =>
  <div className="name">{name}</div>

/* SNS */
const SNS = ({ snsList = [] }) =>
  <div className="sns">
    <div> <IoIosMail size="1rem" /> : My Name</div>
    <div> <FaGithub size="1rem" /> : My Name</div>
    <div> <FaFacebook size="1rem" /> : My Name</div>
    <div> <FaYoutube size="1rem" /> : My Name</div>
  </div>

/* Title */
const Title = ({ title = "Hello My Blog Template" }) =>
  <div className="title">{title}</div>

/* Bottom Button */
const Menu = ({ menuList = [] }) =>
  <div className="menu">
    {
      menuList.map(({ to, menuName }) =>
        <div key={to} className="menuItem">
          <LinkButton to={to}>{menuName}</LinkButton>
        </div>
      )
    }
  </div>

const IndexPage = () =>
  < div className="bContainer" >
    <div className="bCard">
      <MainImg />
      <NickName />
      <SNS />
      <Title />
      <Menu menuList={navMenu} />
    </div>
  </div >

export default IndexPage
