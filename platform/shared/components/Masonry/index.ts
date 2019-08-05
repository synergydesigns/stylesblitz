import styled from 'styled-components'

export const Masonry = styled.div<{ columnCount?: number, maxWidth?: string }>`
  max-width: ${({ maxWidth }) => "350px"};
  column-gap: 1px;
  row-gap: 3px;
  column-count: ${({ columnCount }) => columnCount};
  position: relative;
`

Masonry.defaultProps = {
  columnCount: 3,
  maxWidth: '768px'
}

export const MasonryItem = styled.div`
  background: #fff;
  display: flex;
  width:  100%; 
  margin-bottom: 1px;

  & > img, div {
    width: 100%;
  }
`