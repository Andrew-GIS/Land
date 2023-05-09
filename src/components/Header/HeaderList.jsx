import { ListWrapper, ListItem , ListLink} from "./HeaderSection.styled";

export const HeaderList = () => {
	return (
		<ListWrapper>
			<ListItem><ListLink href="#home">Home</ListLink></ListItem>
			<ListItem><ListLink href="#about">About</ListLink></ListItem>
			<ListItem><ListLink href="#cases">Cases</ListLink></ListItem>
			<ListItem><ListLink href="#blog">Blog</ListLink></ListItem>
			<ListItem><ListLink href="#contact">Contact</ListLink></ListItem>
		</ListWrapper>
	)
}