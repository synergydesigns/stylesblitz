import styled from 'styled-components';
import { color, font } from 'shared/global';

export const ServiceDetailsHeader = styled.div`
  padding-top: 50px;
`;

export const Paragraph = styled.div`
  margin-left: 23px;
  margin-right: 22px;
  text-align: justify; 
  margin-butoom: 40px;
`;

export const IconDiv = styled.div<{ top?: string, left?: string, right?: string, position?: string }>`
  position: ${({ position }) => position};;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
IconDiv.defaultProps = {
  top: '20px',
};

export const Div = styled.div<{ top?: string, left?: string, right?: string, position?: string, margintop?:string, marginbuttom?:string, marginright?:string }>`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  margin-bottom: ${({ marginbuttom }) => marginbuttom};
  margin-top: ${({ margintop }) => margintop}

`;

export const Span = styled.span<{ fontweight?: string}>`
  font-weight: 600;
  margin-right: 18px;
`;
Span.defaultProps = {
  fontweight: '600',
};

export const Services = styled.div`
  border-top: 1px solid ${color.stroke};
  margin-left: 23px;
  margin-right: 22px;
`
export const Bookings = styled.div`
  border-top: 1px solid ${color.stroke};
`