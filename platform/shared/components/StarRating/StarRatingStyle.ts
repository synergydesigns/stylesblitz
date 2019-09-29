import styled from 'styled-components';
import { color as baseColor } from 'shared/global';

export const StarRatingWrapper = styled.label<{ color: string, fontSize: string, defaultColor: string }>`
  position: relative;
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ defaultColor }) => defaultColor};
  transition: color .2s ease-out;

  &:hover {
    cursor: pointer;
  }
    
  &.is-selected {
    color: ${({ color }) => color};
  }
  
  &.is-disabled:hover {
    cursor: default;
  }
`;

StarRatingWrapper.defaultProps = {
  defaultColor: baseColor.lightGray,
  color: baseColor.starGreen,
};

export default StarRatingWrapper;
