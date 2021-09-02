import axios from "axios";
const api = axios.create({
  baseURL: "https://api-restv1.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});
export default api;