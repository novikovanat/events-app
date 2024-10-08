import { useEffect, useState } from "react";
import { fetchEvents } from "../../js/fetch";
import EventsList from "../../Components/EventsList/EventsList";
import Pagination from "../../Components/Pagination/Pagination";
import {
  Header,
 
} from "../../Components/HeaderStyled/HeaderStyled";
import { GlobalStyles, Layout } from "../../GlobalStyles";
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
        if (data.length === 0) {
          setError("No more events anymore");
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

  return (
    <>
      {/* <GlobalStyles/> */}
      
      <Header>Events</Header>
      {data.totalItems && !error && <EventsList events={data.events} />}
      {error && !loading && <p>{error}</p>}
      {loading && <p>Loading participants ...</p>}
      <Layout />
      <Pagination
        currentPage={data.page}
        totalCount={data.totalPages}
        setPage={setPage}
      />
    </>
  );
}
