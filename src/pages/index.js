import React from 'react';

import Link from '../components/Link';
import Layout from '../components/Layout';
import Button from '../components/Button';

import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/lib/fa';
import { IoEmail } from 'react-icons/lib/io';

import '../css/index.scss';

export default function Index(props) {
  return (
    <Layout {...props}>
      <div className="bContainer">
        <div className="bCard">
          {/* Main Image */}
          <div className="img">
            <Link to="/">
              <img
                className="img-circle"
                src="https://avatars2.githubusercontent.com/u/24274424?s=460&v=4"
                alt="MainImge"
              />
            </Link>
          </div>
          {/* My Name */}
          <div className="name">My Name</div>
          {/* Title */}
          <div className="title">Write Something</div>
          {/* SNS Buttons */}
          <div className="sns">
            <Button key={'Mail_button'} type={'snsBtn'} to={'mailto:id@gmail.com'}>
              <IoEmail size="1.5rem" />
            </Button>
            <Button key={'Github_button'} type={'snsBtn'} to={'http://github.com/SeonHyungJo'}>
              <FaGithub size="1.5rem" />
            </Button>
            <Button key={'FaceBook_button'} type={'snsBtn'} to={'http://facebook.com/'}>
              <FaFacebook size="1.5rem" />
            </Button>
            <Button key={'Youtube_button'} type={'snsBtn'} to={'https://youtube.com/'}>
              <FaYoutube size="1.5rem" />
            </Button>
          </div>

          {/* Bottom Button */}
          <div className="menu">
            <div className="menuItem">
              <Link to="/posts">All Post</Link>
            </div>
            <div className="menuItem">
              <Link to="/tags">Category</Link>
            </div>
            <div className="menuItem">
              <Link to="/aboutMe">About Me</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
