import { useParams } from "react-router-dom";
import ParticipantsList from "../../Components/ParticipantsList/ParticipantsList";
import { fetchParticipants } from "../../js/fetch.js";
import { useEffect, useState } from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent.jsx";
import { Layout } from "../../GlobalStyles.js";
export default function ParticipantsPage() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { eventId } = useParams();
  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        setError("");
        const participants = await fetchParticipants(eventId);
        const { data } = participants;
        if (data.length == 0) {
          setError("");
          return;
        }
        setParticipants(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getEvents(eventId);
  }, [eventId]);

  return (
    <Layout>
      <NavigationComponent />
      {participants.length > 0 && !error && (
        <ParticipantsList participants={participants} />
      )}
      {error && !loading && <p>{error}</p>}
      {loading && <p>Loading participants ...</p>}
    </Layout>
  );
}
