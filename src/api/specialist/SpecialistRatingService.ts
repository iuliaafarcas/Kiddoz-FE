import httpConfig from "../../utils/http-common";

class SpecialistRatingService {
  addSpecialistRating(specialistId: number, parentId: number, noStars: number) {
    return httpConfig.post(`/ratingSpecialists`, {
      specialistId,
      parentId,
      noStars,
    });
  }
  getRatingBySpecialistId(id: number) {
    return httpConfig.get(`/ratingSpecialists/${id}`);
  }
}

export default new SpecialistRatingService();
