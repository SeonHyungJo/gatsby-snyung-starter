import React from 'react';
import { graphql } from 'gatsby';

import Link from '../components/Link';
import Layout from '../components/DLayout';
import Button from '../components/Button';

import { FaGithub, FaFacebook, FaYoutube } from "react-icons/lib/fa";
import { IoEmail } from "react-icons/lib/io";

import '../css/main.scss';

export default function Index(props) {
  return (
    <Layout {...props}>
      <div className="bContainer">
        <div className="bCard">
          <div className="img">
            <Link to="/">
              <img className="img-circle" src="https://avatars2.githubusercontent.com/u/24274424?s=460&v=4" alt="MainImge" />
            </Link>
          </div>
          <div className="name">Dev_sseon</div>
          <div className="title">자바스크립트 개발자가 되려고 하는 비전공자</div>
          <div className="sns">
            <Button type={'snsBtn'} to={'mailto:seonhyung.jo@gmail.com'}><IoEmail size="1.5rem" /></Button>
            <Button type={'snsBtn'} to={'http://github.com/SeonHyungJo'}><FaGithub size="1.5rem" /></Button>
            <Button type={'snsBtn'} to={'http://facebook.com/profile.php?id=100015515351267'}><FaFacebook size="1.5rem" /></Button>
            <Button type={'snsBtn'} to={'https://youtube.com/channel/UCCs6KHf_Zo_iI2jfg_eqeDg?view_as=subscriber'}><FaYoutube size="1.5rem" /></Button>
          </div>
          <div className="menu">
            <div className="menuItem">
              <Link to="/">
                All Post
            </Link>
            </div>
            <div className="menuItem">
              <Link to="/resume">
                Resume
            </Link>
            </div>
            <div className="menuItem">
              <Link to="/project">
                Project
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}