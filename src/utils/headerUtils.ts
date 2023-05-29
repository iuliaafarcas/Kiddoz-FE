import { load } from "./localStorage";
const getHeaders = () => {
  let authorization = load("token");
  if (authorization) {
    return {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: authorization,
    };
  } else {
    return {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
  }
};
export default getHeaders;
