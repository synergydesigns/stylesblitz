import React from 'react';
import { FootLinks, FooterWrapper, FooterSocial } from './Style';
import Arrow from '../../../shared/icons/Arrow'
import HomeInput from './HomeInput'

const Footer: React.FC = () => (
  <FooterWrapper>
    <h1>Newsletter subscription</h1>
    <HomeInput />
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
  </FooterWrapper>
)

export default Footer
