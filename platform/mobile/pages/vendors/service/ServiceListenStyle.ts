import styled from 'styled-components'
import { font } from 'globals'

export const ServiceListingWrapper = styled.div`
  width: 100%;
  padding: 20px;
`

export const CategoryList = styled.div`
  background-color: #F5F5F5;
  width: fit-content;
  padding: 5px 15px;
  border-radius: 15px;
  text-align: center;

  p {
    font: normal 14px/18px ${font.primary};
    text-transform: capitalize;
  }
`