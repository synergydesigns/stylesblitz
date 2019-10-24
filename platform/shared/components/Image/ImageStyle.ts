import styled from 'styled-components';

export const ProfileImage = styled.div<{ width?: string, height?: string, image: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
`;

ProfileImage.defaultProps = {
  width: '3750px',
  height: '286px',
};

export const Image = styled(ProfileImage)`
  border-radius: 0px;
`;
