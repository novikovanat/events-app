import axios from "axios";

axios.defaults.baseURL = "http://localhost:3100/events/";
export async function fetchEvents(page) {
  const result = await axios.get("/", {
    query: {
      page: page,
      perPage: 15
    },
  });

  return result.data;
}
export  async function fetchParticipants(eventId) {
  const result = await axios.get(`/${eventId}/participants`);

  return result.data;
}
