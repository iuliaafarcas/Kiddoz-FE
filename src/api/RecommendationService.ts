import httpConfig from "../http-common";

class RecommendationService {
  getRecommendationById(id: number) {
    return httpConfig.get(`/recommendations/${id}`);
  }
}

export default new RecommendationService();
