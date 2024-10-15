import styled from "styled-components";
import EventLink from "../EventLink/EventLink";

export default function EventCard({ title, description, id }) {
  const CardFrame = styled.div`
    border: solid #ff9100;
    border-radius: 25%;
    padding: 16px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    height: 200px;
  `;
  return (
    <CardFrame>
      <h2>{title}</h2>
      <p>{description}</p>
      <nav>
        <EventLink path={`/${id}/participants`} title="View" />
        <EventLink path={`/${id}/registration`} title="Register" />
      </nav>
    </CardFrame>
  );
}
