import { load } from "./localStorage";
const getHeaders = () => {
  let authorization = load("user-token");
  if (authorization) {
    authorization = authorization.substring(1, authorization.length - 1);
  }
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + authorization,
  };
};
export default getHeaders;
