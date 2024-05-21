import httpConfig from "../../utils/http-common";

class RecommendationService {
  getRecommendationById(id: number) {
    return httpConfig.get(`/recommendations/${id}`);
  }

  // getRecommendationsPaged(
  //   page: number,
  //   domain: string,
  //   location: string,
  //   starCount: number,
  //   title: string
  // ) {
  //   let stringBuilder: string = `/recommendations/filter?pageNumber=${page}`;
  //   if (types.length !== 0) {
  //     let typeString = "&types=";
  //     types.map((type, index) => {
  //       return index === types.length - 1
  //         ? (typeString = typeString + type)
  //         : (typeString = typeString + type + ",");
  //     });
  //     stringBuilder += typeString;
  //   }
  //   if (fromAge !== 0 && toAge !== 0 && fromUnitAge !== 0) {
  //     let fromAgeString = "&fromAge=" + fromAge;
  //     fromAgeString += "&toAge=" + toAge;
  //     fromAgeString += "&fromUnitAge=" + fromUnitAge;
  //     stringBuilder += fromAgeString;
  //   }
  //   if (starCount !== 0) {
  //     let starString = "&starCount=" + starCount;
  //     stringBuilder += starString;
  //   }
  //   if (title !== undefined) {
  //     let titleString = "&title=" + title;
  //     stringBuilder += titleString;
  //   }

  //   return httpConfig.get(stringBuilder);
  // }
  getOtherRecommendations(id: number) {
    return httpConfig.get(`/recommendations/otherRecommendations/${id}`);
  }
  getRecommendationsBySpecialist(id: number) {
    return httpConfig.get(
      `/recommendations/getRecommendationsBySpecialist/${id}`
    );
  }

  getRecommendationsByTitle(pageNumber: number, title: String) {
    return httpConfig.get(
      `/recommendations/getRecommendationsByTitle?pageNumber=${pageNumber}&title=${title}`
    );
  }
  getBenefits() {
    return httpConfig.get(`/benefits`);
  }
}

export default new RecommendationService();
