import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select, color } from '@storybook/addon-knobs';

import { H1, H2, H3 } from './index'
import { font as fonts, color as colors } from '../../global'

const fontDefaultValue = fonts.secondary;

const configurableProps = {
  showBackGround: boolean('showBackGround', true),
  size: text('size', '3em'),
  lineHeight: text('lineHeight', '1.2em'),
  weight: text('weight', 'bold'),
  font: select('fonts', { ...fonts }, fontDefaultValue),
  backgroundColor: color('backgroundColor', colors.yellow),
  color: color('color', colors.black)
}

storiesOf('Shared|Text/Headers', module)
  .addDecorator(withKnobs)
  .add('default', () => 
    <>
      <H1>H1 This is the future</H1>
      <H2>H2 This is the future</H2>
      <H3>H3 This is the future</H3>
    </>
  )
  .add('with background', () => 
    <>
      <H1 showBackGround={boolean('showBackGround', true)}>H1 This is the future</H1>
      <H2 showBackGround={boolean('showBackGround', true)}>H2 This is the future</H2>
      <H3 showBackGround={boolean('showBackGround', true)}>H3 This is the future</H3>
    </>
  )
  .add('configurable', () => 
    <>
      <H1 { ...configurableProps } > All header text are configurable </H1>
    </>
  )
