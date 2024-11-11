import { NavStyled, Home, StyledLink } from "./NavigationComponent.styled";

export default function NavigationComponent() {
  return (
    <NavStyled>
      <StyledLink to="/">
        <Home/>
        <span>Home</span>
      </StyledLink>
    </NavStyled>
  );
}
