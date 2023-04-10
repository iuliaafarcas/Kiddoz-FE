export default interface DomainCategory {
  readonly id?: number;
  readonly name: string;
}
export const emptyDomainCategory: DomainCategory = {
  id: 0,
  name: "",
};
