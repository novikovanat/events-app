import { useEffect, useState } from "react";
import fetchEvents from "../../js/fetch";
import EventsList from "../../Components/EventsList/EventsList";
export default function EventsPage() {
  const [data, setData] = useState({
    events: [],
    hasNextPage: null,
    hasPreviousPage: null,
    page: null,
    perPage: null,
    totalItems: null,
    totalPages: null,
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        setError("");
        const events = await fetchEvents(page);
        const { data } = events;
        if (data.length == 0) {
          setError("");
          return;
        }
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getEvents(page);
  }, [page]);

  return <EventsList events={data.events} />;
}
