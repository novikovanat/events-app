import axios from "axios";

axios.defaults.baseURL = "https://events-app-backend-1ldk.onrender.com/events";
export async function fetchEvents(page) {
  const result = await axios.get(`/?page=${page}`);
  return result.data;
}
export async function fetchParticipants(eventId) {
  const result = await axios.get(`/${eventId}/participants`);

  return result.data;
}
export async function postParticipant(eventId, payload) {
  const result = await axios.post(`/${eventId}/participants`, { ...payload });

  return result.data;
}
