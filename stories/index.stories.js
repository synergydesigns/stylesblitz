import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from '../desktop/components/Button'
import { ForgotPassword, Login, Signup } from '../desktop/components/Modal'
import { Logo, Header } from '../desktop/components/Nav'
import Search from '../desktop/components/Search'
import Common from '../desktop/components/Common'

storiesOf('Button')
  .add('Button with class', () =>
    <Button text='Reset' width='150px' height='40px' extraClassName='reset-button'/>)
  .add('Button with style', () =>
    <Button text='Reset' width='150px' height='40px' style={{ backgroundColor: 'grey' }}/>)

storiesOf('Modal')
  .add('Forgot password modal', () => <ForgotPassword />)
  .add('Login  modal', () => <Login />)
  .add('Signup  modal', () => <Signup />)

storiesOf('Navigation')
  .add('Logo', () => <Logo />)
  .add('Header', () => <Header />)

storiesOf('Search')
  .add('Provider Search', () => <Search.Provider />)

storiesOf('Common')
  .add('Provider Snippet', () => <Common.ProviderSnippet
    image="./static/images/sample/1.jpg"
    provider="Dewee Fashion house"
    location="Victoria Island, lagos" />
  )
  .add('Featured Service', () => <Common.FeaturedService />)
  .add('Popular List Item', () => <Common.PopularListItem
    image="./static/images/thumbnail/barber.png"
    name="barbing"/>
  )
  .add('Footer', () => <Common.Footer
    image="./static/images/thumbnail/barber.png"
    name="barbing"/>
  )
  .add('Header', () => <Common.Footer
    image="./static/images/thumbnail/barber.png"
    name="barbing"/>
  )
