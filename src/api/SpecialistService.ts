import httpConfig from "../http-common";

class EventService {
  getSpecialistById(id: number) {
    return httpConfig.get(`/specialists/${id}`);
  }
  getSpecialistsPaged(page: number) {
    return httpConfig.get(`/specialists/paged?pageNumber=${page}`);
  }
}

export default new EventService();
