import axios from "axios";
import getHeaders from "./headerUtils";

export default axios.create({
  baseURL: "https://kiddozbe.azurewebsites.net",
  headers: getHeaders(),
});
