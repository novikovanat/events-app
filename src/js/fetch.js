import axios from "axios";

axios.defaults.baseURL = "http://localhost:3100/events/";
export default async function fetchEvents(page) {
  const result = await axios.get("/", {
    query: {
      page: page,
      perPage: 15
    },
  });

  return result.data;
}
