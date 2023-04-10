import axios from "axios";
import getHeaders from "./utils/headerUtils";

export default axios.create({
  baseURL: "http://localhost:8081",
  headers: getHeaders(),
});
