import styled from "styled-components";

export const HeroWrapper = styled.section`
z-index: -1;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../img/showcase.png");
// background-repeat: no-repeat;
// background-position: 50% 50%;
// background-size: cover;
border-radius: 0px;
//width: 320px;
height: 533px;

//background-color: red;
`;

export const HeroTitle = styled.h1`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 54px;
text-align: center;
margin: 160px 40px 16px 40px;
color: #FFFFFF;
// @media (min-width: 768px) {
// 	font-size: 35px;
// 	line-height: 48px;
// }
`;

export const HeroText = styled.h2`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 32px;
text-align: center;
margin: 0px 20px 24px 20px;
color: #FFFFFF;
// @media (min-width: 768px) {
// 	font-size: 35px;
// 	line-height: 48px;
// }
`;

export const HeroBtn = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px 32px;
gap: 10px;
width: 175px;
height: 57px;
margin: 0px 72px 104px 73px;
background: #28A745;
border-radius: 5px;
`;

export const BTNWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 9px;
color: white;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
justify-content: center;
align-items: center;
`;