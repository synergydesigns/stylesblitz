import React from 'react';
import { FootLinks, FooterWrapper, FooterSocial } from './Style';
import ArrowRight from '../../../shared/icons/ArrowRight'
import HomeInput from './HomeInput'
import NavBar from './NavBar'

const Footer: React.SFC = () => (
  <FooterWrapper>
    <h1>Newsletter subscription</h1>
    <HomeInput>
      <input type="text" placeholder="Enter your email" />
      <button>
        <ArrowRight />
      </button>
    </HomeInput>
    <FootLinks>
      <h1>the company</h1>
      <ul>
        <li>blog</li>
        <li>about us</li>
        <li>careers</li>
        <li>privacy policy</li>
        <li>support</li>
      </ul>
    </FootLinks>
    <FooterSocial>
      <h1>social</h1>
      <img src="/static/images/mobile/social/facebook.png" />
      <img src="/static/images/mobile/social/twitter.png" />
      <img src="/static/images/mobile/social/instagram.png" />
    </FooterSocial>
    <p>2019 LookBlitz. All rights reserved</p>
    <NavBar />
  </FooterWrapper>
)

export default Footer
