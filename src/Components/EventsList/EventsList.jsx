import EventCard from "../EventCard/EventCard";

export default function EventsList({ events }) {
  const eventsList = events.map(({ _id: id, title, description }) => (
    <li key={id}>
      <EventCard title={title} description={description} id={id} />
    </li>
  ));

  return <ul>{eventsList}</ul>;
}
