import {
  StyledNav,
  StyledLink,
  StyledTitle,
  Paragraph,
} from "./EventCard.styled.jsx";

export default function EventCard({ title, description, id }) {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <Paragraph>{description}</Paragraph>
      <StyledNav>
        <StyledLink to={`/${id}/participants`}>View</StyledLink>
        <StyledLink to={`/${id}/registration`}>Register</StyledLink>
      </StyledNav>
    </>
  );
}
