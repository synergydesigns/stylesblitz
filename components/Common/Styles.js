import styled from 'styled-components'
import { font } from '../global'
import Provider from '../Search/Provider';

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