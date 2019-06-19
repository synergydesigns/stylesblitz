import styled from 'styled-components'
import { font, color } from '../../../shared/global'

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
  height: ${({ height }) => height};
  min-width: ${({ width }) => width};
  width: ${({ width }) => width};
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  border-radius: ${({ borderRadius }) => borderRadius || 0};
`

export const FeaturedServiceWrapper = styled.div`
  width: 1200px;
  margin: 20px auto;
  
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

  span {
    position: absolute;
    top: 0;
    z-index: 1;
  }
`
export const PopularItemHeader = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 3;  
  
  h1 {
    color: ${color.white};
    cursor: pointer;
    font: bold 24px/30px ${font.secondary};
    text-transform: capitalize;

    &:hover {
      border: 2px solid ${color.white};
      padding: 5px 20px;
      transition: .2s;
      font-size: 18px;
    }
  }
`
export const PopularItemOverlay = styled.div`
  align-items: center;
  background-color: #000000;
  border: none;
  height: 250px;
  opacity: 0.37;
  position: absolute;
  top: 0px;
  width: 250px;
  z-index: 2;
`

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 413px;
  width: 100%;
  background-color: ${color.darkBlue};

  & > div {
    width: 850px;
    display: flex;
    justify-content: space-evenly;
  }
`

export const FooterSection = styled.div`
  h1 {
    color: ${color.white};
    font: bold 16px/30px ${font.secondary};
    margin: 5px 0;
    text-transform: capitalize;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: ${color.white};
    font: 300 14px/20px ${font.primary};
    text-transform: capitalize;
  }
`
