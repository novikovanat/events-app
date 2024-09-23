import EventLink from "../EventLink/EventLink";

export default function EventCard({ title, description, id }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <nav>
        <EventLink path={`/${id}/participants`} title="View" />
        <EventLink path={`/${id}/reistration`} title="Register" />
      </nav>
    </>
  );
}
