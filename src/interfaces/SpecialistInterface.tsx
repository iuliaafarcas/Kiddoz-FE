import DomainCategory, { emptyDomainCategory } from "./DomainCategory";

export default interface SpecialistInterface {
  readonly id?: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly occupation: string;
  readonly quote: string;
  readonly age: number;
  readonly description: string;
  readonly domain: DomainCategory;
  readonly image: string;
  readonly domainOfActivities: string;
}
export const emptySpecialist: SpecialistInterface = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  quote: "",
  description: "",
  age: 0,
  domain: emptyDomainCategory,
  image: "",
  domainOfActivities: "",
};
