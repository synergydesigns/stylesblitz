import styled from 'styled-components'
import { color, font } from '../global'

export const JumbotronWrapper = styled.div`
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  background-color: #000;
  opacity: 0.4;
`

export const Background = styled.div`
  position: relative;
  z-index: 1;

  .overlay {
    position: absolute;
    height: 500px;
    width: 100%;
    background: black;
    opacity: .4;
  }
`

export const JumbotronBody = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 0;
  display: flex;
  flex-flow: column;
  align-items: center;

  .content {
   max-width: 950px;
   margin: 100px 0px 40px;
  }

  .text-header {
    color: #FFFFFF;
    font: bold 48px/58px ${font.tertiary};
    margin-bottom: 20px;
  }

  .text-info {
    color: #FFFFFF;
    font: 200 24px/30px ${font.primary};
    margin-bottom: 20px;
  }

  .blue {
    color: ${color.primary}
  }

  .content {
    margin-top: 100px;
  }
`

export const PopularServiceWrapper = styled.section`

`

export const PopularListItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 540px;
  justify-content: space-between;
  margin: 20px auto;
  width: 1060px;
`

export const SectionHeader = styled.h1`
	color: ${color.black};
  font: bold 30px/40px ${font.tertiary};
  margin: 20px  auto;
  text-align: center;
  text-transform: capitalize;
`

export const FeatureWrapper = styled.section`
  .feature-service {
    margin: 20px auto;
  }
`

export const JoinWrapper = styled.section`
	height: 345px;
  position: relative;
  margin: 40px auto 9px;
  width: 900px;

  .text-wrapper {
    position: relative;
    top: 50px;
    width: 700px;
  }

  h1 {
    color: ${color.black};
    font: bold 34px/45px ${font.secondary};

    .blue {
      color: ${color.primary}
    }
  }

  p {
    color: #565B73;
    font: 200 22px/34px ${font.primary};
    margin: 20px 0px;
  }
`