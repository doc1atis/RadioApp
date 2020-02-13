import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3000"
});
API.defaults.headers.common["authorization-x-token"] = localStorage.getItem(
  "token"
);
export default API;
