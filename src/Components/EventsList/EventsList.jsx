import EventCard from "../EventCard/EventCard";
import styled from "styled-components";

export default function EventsList({ events }) {
  const ListStyle = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;
  const eventsList = events.map(({ _id: id, title, description }) => (
    <li key={id}>
      <EventCard title={title} description={description} id={id} />
    </li>
  ));

  return <ListStyle>{eventsList}</ListStyle>;
}
