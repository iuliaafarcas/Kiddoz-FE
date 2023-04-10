import httpConfig from "../http-common";

class EventService {
  getSpecialistById(id: number) {
    return httpConfig.get(`/specialists/${id}`);
  }
}

export default new EventService();
