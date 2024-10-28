import { NavLink } from "react-router-dom";
import { CardFrame, StyledLink, StyledTitle} from "./EventCard.styled";

export default function EventCard({ title, description, id }) {
  
  return (
    <CardFrame>
      <StyledTitle>{title}</StyledTitle>
      <p>{description}</p>
      <nav>
        <StyledLink to={`/${id}/participants`}>View</StyledLink>
        <StyledLink to={`/${id}/registration`}>Register</StyledLink>
      </nav>
    </CardFrame>
  );
}

