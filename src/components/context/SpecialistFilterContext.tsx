import React, { createContext, useState } from "react";

interface SpecialistFilterContextType {
  fromAgeFilter: number;
  toAgeFilter: number;
  domainNameFilter: string;
  ratingFilter: number;
  setFromAgeFilter: (value: number) => void;
  setToAgeFilter: (value: number) => void;
  setdomainNameFilter: (value: string) => void;
  setRatingFilter: (value: number) => void;
  nameValue: [string, (value: string) => void];
}

export const SpecialistFilterContext =
  createContext<SpecialistFilterContextType>({
    fromAgeFilter: 0,
    toAgeFilter: 0,
    domainNameFilter: "",
    ratingFilter: 0,
    setFromAgeFilter: () => {},
    setToAgeFilter: () => {},
    setdomainNameFilter: () => {},
    setRatingFilter: () => {},
    nameValue: ["", () => {}],
  });

export const SpecialistFilterContextProvider = ({
  children,
  nameValue,
}: any | null) => {
  const [fromAgeFilter, setFromAgeFilter] = useState<number>(0);
  const [toAgeFilter, setToAgeFilter] = useState<number>(0);
  const [domainNameFilter, setdomainNameFilter] = useState<string>("");
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  const contextValue: SpecialistFilterContextType = {
    fromAgeFilter,
    toAgeFilter,
    domainNameFilter,
    ratingFilter,
    setFromAgeFilter,
    setToAgeFilter,
    setdomainNameFilter,
    setRatingFilter,
    nameValue,
  };

  return (
    <SpecialistFilterContext.Provider value={contextValue}>
      {children}
    </SpecialistFilterContext.Provider>
  );
};
