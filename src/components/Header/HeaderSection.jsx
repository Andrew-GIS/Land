import { HeaderList } from "./HeaderList"
import { HeaderLogo } from "./HeaderLogo"
import { HeaderWrapper } from "./HeaderSection.styled";

export const HeaderSection = () => {
	return (
		<HeaderWrapper>
			<HeaderLogo></HeaderLogo>
			<HeaderList></HeaderList>
		</HeaderWrapper>
	)
}