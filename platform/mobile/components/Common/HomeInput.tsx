import React from 'react';
import { HomeInputWrapper } from './Style';
import ArrowRight from '../../../shared/icons/ArrowRight'

const HomeInput: React.SFC = () => (
  <HomeInputWrapper>
    <input type="text" placeholder="Enter your email" />
    <button>
      <ArrowRight />
    </button>
  </HomeInputWrapper>
)

export default HomeInput
