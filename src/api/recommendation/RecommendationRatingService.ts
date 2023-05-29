import httpConfig from "../../utils/http-common";

class RecommendationRatingService {
  getRatingByRecommendationId(id: number) {
    return httpConfig.get(`/ratingRecommendations/${id}`);
  }

  addRecommendationRating(
    recommendationId: number,
    parentId: number,
    noStars: number
  ) {
    return httpConfig.post(`/ratingRecommendations`, {
      recommendationId,
      parentId,
      noStars,
    });
  }
}

export default new RecommendationRatingService();
