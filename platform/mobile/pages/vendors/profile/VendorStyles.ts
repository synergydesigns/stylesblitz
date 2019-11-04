import styled from 'styled-components';
import { color, font } from 'shared/global';



export const VendProfileHeader = styled.div`
  padding-top: 50px;
`;
export const IconDiv = styled.div<{ top?: string, left?: string, right?: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
IconDiv.defaultProps = {
  top: '20px',
};

export const Span = styled.span`
  font-weight: 600;
  margin-right: 18px;
`;
export const TextWithIcon = styled.div`
  color: ${color.black};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 10px;;
  }

  p {
    font: normal 14px/19px ${font.semiPrimary};
    text-transform: capitalize;
  }
`;

export const FullProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 10px;;
  }

  p {
    font: bold 10px/14px ${font.primary};
    text-transform: uppercase;
  }
`;

export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OpeningContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.secondary};

  h1 {
    text-transform: uppercase;
  }

  p {
    font: bold 12px/12px ${font.primary};
  }

  &:first-child {
    border-right: 1px solid #ffffff;
  }
`;

export const ProfileInfo = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;

export const BorderDiv = styled.div`
  margin-top: 85px;
  position: absolute;
  width: 340px;
  height: 118px;
  background: #FFFFFF;
  border-radius: 3px;
  text-align: left;
  padding-left: 24px;
  padding-top: 13px;
`;
