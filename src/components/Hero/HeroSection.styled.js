import styled from "styled-components";

export const HeroWrapper = styled.section`
z-index: -1;
position: absolute;
top: 0;
left: 0;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/public/showcase.png");
// background-repeat: no-repeat;
// background-position: 50% 50%;
// background-size: cover;
border-radius: 0px;
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
@media (min-width: 768px) {
	font-size: 55px;
	line-height: 75px;
	margin: 378px 123px 16px 122px;
}
@media (min-width: 1360px) {
	font-size: 55px;
	line-height: 75px;
	margin: 272px 418px 16px 418px;
}
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
@media (min-width: 768px) {
	font-size: 40px;
	line-height: 48px;
	margin: 0px 123px 24px 123px;
}

@media (min-width: 1360px) {
	line-height: 54px;
	margin: 0px 2803px 24px 280px;
}
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
border: 0px;
border-radius: 5px;
@media (min-width: 768px) {
	margin: 0px 297px 378px 297px;
}
@media (min-width: 1360px) {
	margin: 0px 593px 270px 593px;
}
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