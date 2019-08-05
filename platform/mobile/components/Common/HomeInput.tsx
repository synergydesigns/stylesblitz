import React from 'react';
import { HomeInputWrapper } from './Style';
import Arrow from '../../../shared/icons/Arrow'

const HomeInput: React.FC = () => (
  <HomeInputWrapper>
    <input type="text" placeholder="Enter your email" />
    <button>
      <Arrow />
    </button>
  </HomeInputWrapper>
)

export default HomeInput
