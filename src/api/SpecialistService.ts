import httpConfig from "../http-common";

class EventService {
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
    console.log(domainName, typeof domainName, name, typeof name);
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
