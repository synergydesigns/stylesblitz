import React, { Component } from 'react'

import { FooterWrapper, FooterSection } from './Styles'

class Footer extends Component {
  options = [
    {
      title: 'find professionals',
      menu: [
        'get listed',
        'team',
        'careers',
        'terms of blitz',
        'terms of clients',
        'privacy',
        'sitemap'
      ]
    },
    {
      title: 'browse',
      menu: [
        'all salons',
        'fitness',
       'haircuts & hairdressing',
        'eye',
        'nails',
        'tanning',
        'massage',
        'alternative therapy',
        'Wwxing & hair removal',
        'face',
        'body',
        'piercing',
        'browse treatments'
      ]
    },
    {
      title: 'popular blitz',
      menu: [
        'varda spa',
        'beyond rest',
        'christopher hanna',
        'enta',
        'luxe spa',
        'espa beauty',
        'crescent beauty salon',
        'sense of thai'
      ]
    },
    {
      title: 'popular categories',
      menu: [
        'eyelash extensions',
        'hair extensions melbourne',
        'pedicure',
        'waxing',
       ' ear piercing',
        'brazilian wax',
        'gel nail list',
      ]
    }
  ]

  render () {
    return (
      <FooterWrapper>
        <div>
          {
            this.options.map(({ title, menu }, index) => (
              <FooterSection key={index}>
                <h1>{ title }</h1>
                <ul>{ menu.map((item, index) => <li key={index}>{ item }</li>)}</ul>
              </FooterSection>
            ))
          }
        </div>
      </FooterWrapper>
    )
  }
}

export default Footer
