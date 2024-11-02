import EventCard from "../EventCard/EventCard";
import styled from "styled-components";

export default function EventsList({ events }) {
  const ListStyle = styled.ul`
    /* display: flex;
    flex-direction: column;
    gap: 8px; */
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 26px;
    }
  `;
  const ListLi = styled.li`
    @media (min-width: 768px) {
      width: calc((100% - 48px) / 2);
    }
    @media (min-width: 1280px) {
      width: calc((100% - 84px) / 4);
    }
  `;
  const eventsList = events.map(({ _id: id, title, description }) => (
    <ListLi key={id}>
      <EventCard title={title} description={description} id={id} />
    </ListLi>
  ));

  return <ListStyle>{eventsList}</ListStyle>;
}
