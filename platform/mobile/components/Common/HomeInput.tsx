import React from 'react';

import Arrow from 'shared/icons/Arrow';
import { HomeInputWrapper } from './Style';

const HomeInput: React.FC = () => (
  <HomeInputWrapper>
    <input type="text" placeholder="Enter your email" />
    <button type="button">
      <Arrow />
    </button>
  </HomeInputWrapper>
);

export default HomeInput;
