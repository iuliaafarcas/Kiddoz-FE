import axios from "axios";
import getHeaders from "./headerUtils";

export default axios.create({
  baseURL: "http://localhost:8081",
  headers: getHeaders(),
});
