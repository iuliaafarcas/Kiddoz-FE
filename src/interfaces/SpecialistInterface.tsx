import DomainCategory, { emptyDomainCategory } from "./DomainCategory";
import DomainInterest from "./DomainInterest";

export default interface SpecialistInterface {
  readonly id?: number;
  readonly name: string;
  readonly email: string;
  readonly occupation: string;
  readonly quote: string;
  readonly age: number;
  readonly description: string;
  readonly domain: DomainCategory;
  readonly image: string;
  readonly domainsInterest: DomainInterest[];
}
export const emptySpecialist: SpecialistInterface = {
  id: 0,
  name: "",
  email: "",
  occupation: "",
  quote: "",
  description: "",
  age: 0,
  domain: emptyDomainCategory,
  image: "",
  domainsInterest: [],
};
