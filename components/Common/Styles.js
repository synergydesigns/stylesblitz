import styled from 'styled-components'
import { font, color } from '../global'

export const ProviderSnippetWrapper = styled.div`
  display: flex;

  div {
    margin: 10px 0 0 10px;
  }

  h1 {
    color: #333333;
    font: bold 18px/27px ${font.secondary};
    margin: 0px;
  }

  h3 {
    color: #757575;
    font: 300 14px/18px ${font.primary};
    margin: 0px;
  }
`

export const ImageWrapper = styled.span`
  display: inline-block;
  height: ${({height}) => height};
  min-width: ${({width}) => width};
  width: ${({width}) => width};
  background-image: url(${({image}) => image});
  background-position: center;
  background-size: cover;
  border-radius: ${({borderRadius}) => borderRadius || 0};
`

export const FeaturedServiceWrapper = styled.div`
  width: 1200px;
  
  .react-tabs {
    display: flex;

    ul {
      list-style-type: none;
      padding: 0px;

      li {
        align-items: center;
        cursor: pointer;
        display: flex;
        height: 60px;
        justify-content: center;
        width: 100px;
      }

      li.react-tabs__tab--selected {
        background-color: #FAFAFA;
      }
    }
  }

  .feature-service-panel {
    display: flex;

    section {
      padding: 20px;
      background-color: #FAFAFA;
      
      .provider-snippet {
        margin: 0 0 20px 10px;
      }

      h2 {
        color: #0D112B;
        font: bold 20px/24px ${font.secondary};
        margin: 5px 0px;
      }

      .featured-description {
        color: #6D6D6D;
        font: normal 16px/24px ${font.primary};
        margin: 0 0 20px;
      }
    }
  }
`

export const KeyValue = styled.div`
  display: flex;
  padding: 5px 0;

  h1 {
    margin: 0;
    font: bold 18px/22px ${font.secondary};
    text-transform: capitalize;
    width: ${({ width }) => width || '90px'};
  }

  p {
    color: #6D6D6D;
    font: 300 18px/22px ${font.primary};
    margin: 0;
  }
`

export const PopularItemWrapper = styled.div`
  height: 250px;
  position: relative;
  width: 250px;

  div {
    align-items: center;
    background-color: #000000;
    border: none;
    height: 250px;
    opacity: 0.37;
    position: relative;
    width: 250px;
    z-index: 2;
  }

  h1 {
    color: ${color.white};
    font: bold 24px/30px ${font.secondary};
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    position: absolute;
    text-transform: capitalize;
    top: 60%;
    z-index: 3;
  }

  span {
    position: absolute;
    top: 0;
    z-index: 1;
  }
`