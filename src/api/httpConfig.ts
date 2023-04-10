import { AxiosRequestConfig } from "axios";

export const httpConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8081",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
