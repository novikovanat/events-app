import EventCard from "../EventCard/EventCard";
import { ListStyle, ListLiStyle } from "./EventsList.styles";

export default function EventsList({ events }) {

  const eventsList = events.map(({ _id: id, title, description }) => (
    <ListLiStyle key={id}>
      <EventCard title={title} description={description} id={id} />
    </ListLiStyle>
  ));

  return <ListStyle>{eventsList}</ListStyle>;
}

