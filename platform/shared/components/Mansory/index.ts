import styled from 'styled-components'

export const Masonry = styled.div<{ columnCount?: number, maxWidth?: string }>`
  margin: 1.5em auto;
  max-width: ${({ maxWidth }) => maxWidth};
  column-gap: .5em;
  column-count: ${({ columnCount }) => columnCount};
`

Masonry.defaultProps = {
  columnCount: 3,
  maxWidth: '768px'
}

export const MasonryItem = styled.div`
  display: inline-block;
  background: #fff;
  display: inline-block;
  width:  100%; 

  & > img, div {
    width: 100%;
  }
`