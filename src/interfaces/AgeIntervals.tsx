import { AgeUnitEnum } from "./AgeUnitEnum";

export default interface AgeIntervals {
  readonly fromAge: number;
  readonly toAge: number;
  readonly fromAgeUnit: number;
}
export const emptyAgeInterval: AgeIntervals = {
  fromAge: 0,
  toAge: 0,
  fromAgeUnit: 0,
};

export const childPhases: AgeIntervals[] = [
  { fromAge: 1, toAge: 3, fromAgeUnit: 1 },
  { fromAge: 4, toAge: 11, fromAgeUnit: 1 },
  { fromAge: 1, toAge: 2, fromAgeUnit: 2 },
  { fromAge: 3, toAge: 5, fromAgeUnit: 2 },
  { fromAge: 6, toAge: 13, fromAgeUnit: 2 },
  { fromAge: 14, toAge: 17, fromAgeUnit: 2 },
  { fromAge: 18, toAge: 25, fromAgeUnit: 2 },
];
