import React from 'react';

import { BaseInputWrapper } from './ButtonStyle';

interface Props {
  placeholder?: string
  value?: string
  onClick: () => void
  id?: string
  name: string
}

const BaseInput: React.FC = props => (
  <BaseInputWrapper>
    <input {...props} />
  </BaseInputWrapper>
);

export default BaseInput;
