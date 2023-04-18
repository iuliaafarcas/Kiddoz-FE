import React, { createContext, useState } from "react";

interface MyContextType {
  typeFilter: number[];
  ageFilter: number;
  ageUnitFilter: number;
  ratingFilter: number;
  setTypeFilter: (value: number[]) => void;
  setAgeFilter: (value: number) => void;
  setAgeUnitFilter: (value: number) => void;
  setRatingFilter: (value: number) => void;
}

export const MyContext = createContext<MyContextType>({
  typeFilter: [],
  ageFilter: 0,
  ageUnitFilter: 0,
  ratingFilter: 0,
  setTypeFilter: () => {},
  setAgeFilter: () => {},
  setAgeUnitFilter: () => {},
  setRatingFilter: () => {},
});

export const MyContextProvider = ({ children }: any) => {
  const [typeFilter, setTypeFilter] = useState<number[]>([]);
  const [ageFilter, setAgeFilter] = useState<number>(0);
  const [ageUnitFilter, setAgeUnitFilter] = useState<number>(0);
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  const contextValue: MyContextType = {
    typeFilter,
    ageFilter,
    ageUnitFilter,
    ratingFilter,
    setTypeFilter,
    setAgeFilter,
    setAgeUnitFilter,
    setRatingFilter,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
