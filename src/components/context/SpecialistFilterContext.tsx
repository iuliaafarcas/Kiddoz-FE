import React, { createContext, useState } from "react";

interface SpecialistFilterContextType {
  fromAgeFilter: number;
  toAgeFilter: number;
  domainNameFilter: string;
  ratingFilter: number;
  nameFilter: string;
  setFromAgeFilter: (value: number) => void;
  setToAgeFilter: (value: number) => void;
  setdomainNameFilter: (value: string) => void;
  setRatingFilter: (value: number) => void;
  setNameFilter: (value: string) => void;
}

export const SpecialistFilterContext =
  createContext<SpecialistFilterContextType>({
    fromAgeFilter: 0,
    toAgeFilter: 0,
    domainNameFilter: "",
    ratingFilter: 0,
    nameFilter: "",
    setFromAgeFilter: () => {},
    setToAgeFilter: () => {},
    setdomainNameFilter: () => {},
    setRatingFilter: () => {},
    setNameFilter: () => {},
  });

export const SpecialistFilterContextProvider = ({ children }: any) => {
  const [fromAgeFilter, setFromAgeFilter] = useState<number>(0);
  const [toAgeFilter, setToAgeFilter] = useState<number>(0);
  const [domainNameFilter, setdomainNameFilter] = useState<string>("");
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [nameFilter, setNameFilter] = useState<string>("");

  const contextValue: SpecialistFilterContextType = {
    fromAgeFilter,
    toAgeFilter,
    domainNameFilter,
    ratingFilter,
    nameFilter,
    setFromAgeFilter,
    setToAgeFilter,
    setdomainNameFilter,
    setRatingFilter,
    setNameFilter,
  };

  return (
    <SpecialistFilterContext.Provider value={contextValue}>
      {children}
    </SpecialistFilterContext.Provider>
  );
};
