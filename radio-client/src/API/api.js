import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "authorization-x-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlM2M0ZjMxOTllNWNkNzIxNGYyMmFmYyIsInVzZXJuYW1lIjoib2xneSIsImlhdCI6MTU4MTUzMjc2NCwiZXhwIjoxNjEzMDY4NzY0fQ.xpqzyTXf6ZUFMpZWOR8Mccv-EilRT6YRUIMcwpZXKoE"
  }
});

export default API;
