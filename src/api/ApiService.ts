import axios, { AxiosInstance } from "axios";
import { httpConfig } from "./httpConfig";

class ApiService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create(httpConfig);
  }

  getReq(url: string) {
    return this.axios.get(url);
  }

  async postReqForm(url: string, obj: any) {
    const response = await this.axios.post(url, obj, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    return response;
  }

  async postReq(url: string, obj: any) {
    const response = await this.axios.post(url, obj);

    return response;
  }
}

export default new ApiService();
