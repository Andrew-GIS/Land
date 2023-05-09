import { HeroWrapper, HeroTitle, HeroText, HeroBtn, BTNWrapper } from "./HeroSection.styled";

export const HeroSection = () => {
	return (
		<HeroWrapper>
			<HeroTitle>The Sky Is The Limit</HeroTitle>
			<HeroText>We provide world class financial assistance</HeroText>
			<HeroBtn>
				<BTNWrapper>
					<p>{'>'}</p>
					<p>Read More</p>
				</BTNWrapper>
			</HeroBtn>
		</HeroWrapper>
	)
}