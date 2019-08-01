import styled from 'styled-components'

export const ProfileImage = styled.div<{ width?: string, height?: string, image: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  border-radius: 100px;
`

ProfileImage.defaultProps = {
  width: '60px',
  height: '60px'
}