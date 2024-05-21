import httpConfig from "../../utils/http-common";

class EventService {
  addInternship(
    employerId: number,
    title: string,
    domain: string,
    description: string,
    location: string,
    candidateDescription: string,
    benefits: string,
    organisationMethod: string,
    startDate: Date,
    endDate: Date,
    paidPosition: boolean,
    startingSalary: number,
    highestSalary: number,
    currency: string,
    hiringPossibility: boolean,
    postDate: Date,
    closingDate: Date
  ) {
    return httpConfig.post(`/internships`, {
      employerId,
      title,
      domain,
      description,
      location,
      candidateDescription,
      benefits,
      organisationMethod,
      startDate,
      endDate,
      paidPosition,
      startingSalary,
      highestSalary,
      currency,
      hiringPossibility,
      postDate,
      closingDate,
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
