import httpConfig from "../http-common";

class RecommendationService {
  getRecommendationById(id: number) {
    return httpConfig.get(`/recommendations/${id}`);
  }
  getRecommendationsPaged(page: number) {
    return httpConfig.get(`/recommendations/paged?pageNumber=${page}`);
  }
  getOtherRecommendations(id: number) {
    return httpConfig.get(`/recommendations/otherRecommendations/${id}`);
  }
  getRecommendationsBySpecialist(id: number) {
    return httpConfig.get(
      `/recommendations/getRecommendationsBySpecialist/${id}`
    );
  }
}

export default new RecommendationService();
