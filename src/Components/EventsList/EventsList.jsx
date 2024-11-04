import EventCard from "../EventCard/EventCard";
import styled from "styled-components";

export default function EventsList({ events }) {
  const ListStyle = styled.ul`
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 26px;
    }
    @media (min-width: 1280px) {
      gap: 48px;
    }
  `;
  const ListLi = styled.li`
    box-shadow: #ff9100 0px 0px 0px 2px, rgba(6, 44, 12, 0.65) 0px 4px 6px -1px,
      rgba(20, 61, 2, 0.08) 0px 1px 0px inset;
    border: solid #ff9100d2;
    padding: 21px 8px 8px;
    margin-bottom: 46px;
    @media (min-width: 768px) {
      display: flex;
      width: calc((100% - 48px) / 2);
      flex-direction: column;
      /* min-height: 190px; */
    }
    @media (min-width: 1280px) {
      width: calc((100% - 84px) / 2);
    }
  `;
  const eventsList = events.map(({ _id: id, title, description }) => (
    <ListLi key={id}>
      <EventCard title={title} description={description} id={id} />
    </ListLi>
  ));

  return <ListStyle>{eventsList}</ListStyle>;
}
