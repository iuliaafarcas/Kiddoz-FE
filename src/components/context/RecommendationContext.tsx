import React, { createContext, useMemo, useState } from "react";
import RecommendationInterface, {
  emptyRecommendation,
} from "../../interfaces/RecommendationInterface";

export interface RecommendationContextModel {
  RecommendationObject: RecommendationInterface;
  setRecommendationObject?: (value: RecommendationInterface) => void;
}

export const RecommendationContext = createContext<RecommendationContextModel>({
  RecommendationObject: emptyRecommendation,
  setRecommendationObject: undefined,
});

export const RecommendationContextProvider = ({
  children,
  value,
}: any | null) => {
  const [RecommendationObjectData, setRecommendationObjectData] =
    useState<RecommendationInterface>(
      value === undefined ? emptyRecommendation : value
    );
  const contextValue = useMemo(() => {
    return {
      RecommendationObject: RecommendationObjectData,
      setRecommendationObject: setRecommendationObjectData,
    };
  }, [RecommendationObjectData, setRecommendationObjectData]);

  return (
    <RecommendationContext.Provider value={contextValue}>
      {children}
    </RecommendationContext.Provider>
  );
};
