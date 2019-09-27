import styled from 'styled-components';
import { font, color } from 'globals';

export const ButtonWrapper = styled.div`
.button-full-no-icon{
position: relative;
width: 375px;
height: 70px;
background: ${color.white}

span{
position: absolute;
left: 44.53%;
right: 44.53%;
top: 37.14%;
bottom: 31.43%;
font-family: ${font.primary}
font-size: 16px;
line-height: 22px;
text-align: center;
color: ${color.black};

}
}


.button-full-icon{
 position: relative;
 width: 375px;
 height: 70px;
 background: ${color.white}
 
 span{
 position: absolute;
 left: 44.53%;
 right: 44.53%;
 top: 37.14%;
 bottom: 31.43%;
 font-family: ${font.primary}
 font-size: 16px;
 line-height: 22px;
 text-align: center;
 color: ${color.black};
 
 }
 svg{
position: absolute;
left: 37.53%;
 right: 48.53%;
 top: 39.14%;
 bottom: 30.43%;
border: 1.5px solid #323645;
 }
 }


 .fab-cart{
  width: 60px;
 height: 60px;
 border-radius:50%
 background: ${color.white}

 span{
  background: ${color.blue}
  color: ${color.white}
  border-corner-shape: bevel
  border-radius: 40%;
  width:  30px
  height: 30px
  position: absolute;
  left: 4%;
  right: 20%;
  top: 1%;
  text-align:center;
 }
 }

 
 .button-wide-primary{
  background: ${color.blue}
  color: ${color.white}
  position: absolute;
  width: 330px;
  height: 50px;
  border-radius: 3px

  span{
font-size: 16px;
line-height: 22px;
font-family: ${font.primary}
  }
 }

 .button-mid-primary{
  background: ${color.blue}
  color: ${color.white}
  position: absolute;
  width: 122px;
  height: 50px;
  border-radius: 3px

  span{
    font-size: 16px;
    line-height: 22px;
    font-family: ${font.primary}
      }
 }


 .button-mid-secondary{
  background: #E9F0FB
  color: ${color.black}
  position: absolute;
  width: 122px;
  height: 50px;
  border-radius: 3px

  span{
    font-size: 16px;
    line-height: 22px;
    font-family: ${font.primary}
      }
 }


 .button-mid-white{
  background: ${color.white}
  color: ${color.black}
  position: absolute;
  width: 122px;
  height: 50px;
  border-radius: 3px

  span{
    font-size: 16px;
    line-height: 22px;
    font-family: ${font.primary}
      }
 }

 .tag-cyan{
  background: #D3F3F8
  color: #1C9CB0
  position: absolute;
  width: 70px;
  height: 25px;
  border-radius: 3px

  span{
    font-size: 12px;
    line-height: 16px;
    font-family: ${font.primary}
    text-align: center;
    position: absolute;
  right: 30%;
  top: 17%;
      }
 }

 .tag-orange{
  background: #F8EDD3
  color: #B0841C
  position: absolute;
  width: 70px;
  height: 25px;
  border-radius: 3px

  span{
    font-size: 12px;
    line-height: 16px;
    font-family: ${font.primary}
    text-align: center;
    position: absolute;
    right: 30%;
  top: 17%;
      }
 }

 .tag-green{
  background: #D5F6DE
  color: #24A848
  position: absolute;
  width: 70px;
  height: 25px;
  border-radius: 3px

  span{
    font-size: 12px;
    line-height: 16px;
    font-family: ${font.primary}
    text-align: center;
    position: absolute;
    right: 30%;
  top: 17%;
      }
 }

 .tag-magenta{
  background: #F8D3EB
  color: #B01C7C
  position: absolute;
  width: 70px;
  height: 25px;
  border-radius: 3px

  span{
    font-size: 12px;
    line-height: 16px;
    font-family: ${font.primary}
    text-align: center;
    right: 30%;
    position: absolute;
  top: 17%;
      }
 }

 .tag-red{
  background: #FA9393
  color: #C30909
  position: absolute;
  width: 70px;
  height: 25px;
  border-radius: 3px

  span{
    font-size: 12px;
    line-height: 16px;
    font-family: ${font.primary}
    text-align: center;
    position: absolute;
    right: 30%;
  top: 17%;
      }
 }
 .tag-square{
  background: #F96A6A
  color: ${color.white}
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 40% 10% 40% 10%

  span{
    font-size: 10px;
    line-height: 14px;
    font-family: ${font.primary}
    text-align: center;
    position: absolute;
    right: 17%;
    top: 30%;
      }
 }

 .tag-blue{
  background: ${color.white}
  color: ${color.blue}
  position: absolute;
  width: 100px;
  height: 25px;
  border-radius: 3px
  border: 1px solid #178FD2;
  box-sizing: border-box;

  span{
    font-size: 12px;
    line-height: 16px;
    font-family: ${font.primary}
    text-align: center;
    position: absolute;
    right: 37%;
  top: 17%;
      }
 }

 .tag-mid{
  background: ${color.white}
  color: #DE78EF
  position: absolute;
  width: 100px;
  height: 25px;
  border-radius: 3px
  border: 1px solid #DE78EF;
  box-sizing: border-box;

  span{
    font-size: 12px;
    line-height: 16px;
    font-family: ${font.primary}
    text-align: center;
    position: absolute;
    right: 37%;
  top: 17%;
      }
 }
`