export default interface DomainInterest {
  readonly id?: number;
  readonly name: string;
}
export const emptyDomainInterest: DomainInterest = {
  id: 0,
  name: "",
};
