import React, { Component } from 'react'

import { Header } from '../Nav'
import { ImageWrapper } from '../Common/Styles'
import { JumbotronWrapper, JumbotronBody, Background} from './Styles'
import Search from '../Search'

class Jumbotron extends Component {
  render () {
    return (
      <JumbotronWrapper>
        <Background>
          <div className="overlay" />
          <ImageWrapper
            height="600px"
            width="100%"
            image="/static/images/hipster-mum-236831-unsplash.jpg" />
        </Background>
        <Header />
        <JumbotronBody>
          <div className="content">
            <h2 className="text-header">Socialize,  
              <span className="blue"> Book</span> 
              and Buy all things <span className="blue">beauty</span>, fashion and wellness</h2>
            <p className="text-info">with <span className="blue">styleblitz</span> instantly book
              all your next beauty, fashion and wellness appointments. Schedule 
              future appointments and always remain elegant on your next outing. 
            </p>
          </div>
          <Search.Provider />
        </JumbotronBody>
      </JumbotronWrapper>
    )
  }
}

export default Jumbotron
