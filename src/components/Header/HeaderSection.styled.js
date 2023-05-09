import styled from "styled-components";

export const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;
 @media (min-width: 768px) {
    flex-direction: row;
	//justify-content: space-between;
	align-items: center;
  }
`;

export const LogoWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;
margin: 22px 50px 16px 24px;
height: 38px;
@media (min-width: 768px) {
    margin: 16px 0px 0px 32px;
	gap: 9.6px;
	:hover {
	transform: scale(1.1);
	transition-duration: 0.3s;
	transition-timing-function: linear;
	}
  }
  @media (min-width: 1360px){
	gap: 4px;
	margin: 0px 0px 0px 28px;
  }
`;

export const LogoText = styled.h2`
color: #FFFFFF;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 38px;
margin: 0;
@media (min-width: 768px) {
	font-size: 35px;
	line-height: 48px;
}
`;

export const ListWrapper = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 12px;
height: 22px;
margin: 0px 22px 0px 22px;
@media (min-width: 768px) {
    margin: 28px 32px 0px 73px;
	height: 25px;
	gap: 20px;
  }
@media (min-width: 1360px){
	margin: 48px 30px 0px 552px;
	height: 52px;
	gap: 46px;
  }
`;

export const ListItem = styled.li`
//color: #FFFFFF;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
:hover {
	cursor: pointer;
	color: #28A745;
	border-bottom: 3px solid #28A745;
}
@media (min-width: 768px){
	font-size: 18px;
	line-height: 25px;
}
`;

export const ListLink = styled.a`
text-decoration: none;
color: #FFFFFF;
:hover {
	color: #28A745;
}
`;