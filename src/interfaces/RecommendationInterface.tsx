import Benefit from "./Benefits";
import SpecialistInterface, { emptySpecialist } from "./SpecialistInterface";

export default interface RecommendationInterface {
  readonly id?: number;
  readonly title: String;
  readonly description: string;
  readonly fromAge: number;
  readonly fromUnitAge: string;
  readonly toAge: number;
  readonly toUnitAge: string;
  readonly type: string;
  readonly image: string;
  readonly specialist: SpecialistInterface;
  readonly benefits: Benefit[];
}

export const emptyRecommendation: RecommendationInterface = {
  id: 0,
  title: "",
  description: "",
  fromAge: 0,
  fromUnitAge: "",
  toAge: 0,
  toUnitAge: "",
  type: "",
  image: "",
  specialist: emptySpecialist,
  benefits: [],
};
