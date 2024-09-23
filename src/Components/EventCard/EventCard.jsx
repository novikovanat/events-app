import EventLink from "../EventLink/EventLink";

export default function EventCard({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <nav>
        <EventLink path="/:eventId/participants" title="Register" />
        <EventLink path="/:eventId/reistration" title="View" />
      </nav>
    </>
  );
}
