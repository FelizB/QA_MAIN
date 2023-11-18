import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
  timeout: 15000,
});
export default customFetch;
