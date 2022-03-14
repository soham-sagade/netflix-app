import axios from "axios";

const api = axios.create({
  baseURL: "https://safe-scrubland-91543.herokuapp.com/",
});

export default api;
