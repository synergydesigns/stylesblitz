import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from '../components/Button'
import { ForgotPassword, Login, Signup } from '../components/Modal'
import { Logo, Header } from '../components/Nav'
import Search from '../components/Search'
import Common from '../components/Common'

storiesOf('Button')
  .add('Button with class', () =>
     <Button text='Reset' width='150px' height='40px' extraClassName='reset-button'/> )
  .add('Button with style', () =>
     <Button text='Reset' width='150px' height='40px' style={{ backgroundColor: 'grey' }}/> )

storiesOf('Modal')
  .add('Forgot password modal', () => <ForgotPassword /> )
  .add('Login  modal', () => <Login /> )
  .add('Signup  modal', () => <Signup /> )


storiesOf('Navigation')
  .add('Logo', () => <Logo /> )
  .add('Header', () => <Header /> )


storiesOf('Search')
  .add('Provider Search', () => <Search.Provider /> )

storiesOf('Common')
  .add('Provider Snippet', () => <Common.ProviderSnippet 
    image="./static/images/sample/1.jpg"
    provider="Dewee Fashion house"
    location="Victoria Island, lagos" /> 
  )
  .add('Featured Service', () => <Common.FeaturedService /> )

