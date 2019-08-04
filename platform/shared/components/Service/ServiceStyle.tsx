import styled from 'styled-components'
import { font, color } from 'globals'

export const ServiceListItemContainer = styled.div`
  width: 320px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
`

export const ServiceListItemDetails = styled.div`
  margin-left: 10px;

  h1, p {
    margin: 0px;
  }

  .service-listitem__title {
    font: normal 16px/22px ${font.semiPrimary};
  }

  .service-listitem__time {
    font: normal 12px/16px ${font.primary};
    color: #999999;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    
    p {
      margin-left: 5px;
    }
  }

  .service-listitem__price {
    font: normal 12px/16px ${font.primary};
    color: ${color.primary};
  }

  .service-listitem__book {
    font: normal 14px/19px ${font.semiPrimary};
    background-color: ${color.primary};
    color: ${color.white};
    width: 80px;
    height: 30px;
    border: none;
    position: absolute;
    right: 0px;
    bottom: 0px;
    cursor: pointer;
  }
`