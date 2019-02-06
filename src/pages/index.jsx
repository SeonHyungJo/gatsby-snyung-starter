import React from 'react'
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/lib/fa'
import { IoEmail } from 'react-icons/lib/io'

import Layout from 'component/Layout'
import { SNSButton, LinkButton } from 'component/Button'

import 'css/index.scss'

const Index = props => {
  return (
    <Layout {...props}>
      <div className="bContainer">
        <div className="bCard">
          {/* Main Image */}
          <div className="img">
            <LinkButton to="/">
              <img
                className="img-circle"
                src="https://avatars2.githubusercontent.com/u/24274424?s=460&v=4"
                alt="MainImge"
              />
            </LinkButton>
          </div>
          {/* My Name */}
          <div className="name">My Name</div>
          {/* Title */}
          <div className="title">Write Something</div>
          {/* SNS Buttons */}
          <div className="sns">
            <SNSButton key={'Mail_button'} to={'mailto:id@gmail.com'}>
              <IoEmail size="1.5rem" />
            </SNSButton>
            <SNSButton
              key={'Github_button'}
              to={'http://github.com/SeonHyungJo'}
            >
              <FaGithub size="1.5rem" />
            </SNSButton>
            <SNSButton key={'FaceBook_button'} to={'http://facebook.com/'}>
              <FaFacebook size="1.5rem" />
            </SNSButton>
            <SNSButton key={'Youtube_button'} to={'https://youtube.com/'}>
              <FaYoutube size="1.5rem" />
            </SNSButton>
          </div>

          {/* Bottom Button */}
          <div className="menu">
            <div className="menuItem">
              <LinkButton to="/posts">All Post</LinkButton>
            </div>
            <div className="menuItem">
              <LinkButton to="/category">Category</LinkButton>
            </div>
            <div className="menuItem">
              <LinkButton to="/aboutMe">About Me</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
