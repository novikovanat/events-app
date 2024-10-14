import styled from "styled-components";
import EventLink from "../EventLink/EventLink";

export default function EventCard({ title, description, id }) {
  const OrageTitle = styled.h2 `
  `
  const CardFrame = styled.div`
  border: solid #FF9100;
  border-radius: 25%;
  padding: 26px;
  `
  return (
    <CardFrame>
      <OrageTitle>{title}</OrageTitle>
      <p>{description}</p>
      <nav>
        <EventLink path={`/${id}/participants`} title="View" />
        <EventLink path={`/${id}/reistration`} title="Register" />
      </nav>
    </CardFrame>
  );
}
