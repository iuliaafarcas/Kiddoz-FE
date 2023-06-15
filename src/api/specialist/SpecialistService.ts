import httpConfig from "../../utils/http-common";

class EventService {
  addRecommendation(
    title: string,
    description: string,
    fromAge: number,
    fromUnitAge: string,
    toAge: number,
    toUnitAge: string,
    type: string,
    image: string,
    specialistId: number,
    benefits: Array<number>[]
  ) {
    return httpConfig.post(`/recommendations`, {
      title,
      description,
      fromAge,
      fromUnitAge,
      toAge,
      toUnitAge,
      type,
      image,
      specialistId,
      benefits,
    });
  }
  getSpecialistById(id: number) {
    return httpConfig.get(`/specialists/${id}`);
  }
  getSpecialistsPaged(
    page: number,
    fromAge: number,
    toAge: number,
    name: string,
    domainName: string,
    starCount: number
  ) {
    let stringBuilder: string = `/specialists/filter?pageNumber=${page}`;
    if (fromAge !== 0) {
      stringBuilder += "&fromAge=" + fromAge;
    }
    if (toAge !== 0) {
      stringBuilder += "&toAge=" + toAge;
    }
    if (name !== "") {
      stringBuilder += "&name=" + name;
    }

    if (domainName !== undefined && domainName !== "") {
      stringBuilder += "&domainName=" + domainName;
    }

    if (starCount !== 0) {
      let starString = "&starCount=" + starCount;
      stringBuilder += starString;
    }

    return httpConfig.get(stringBuilder);
  }
}

export default new EventService();
