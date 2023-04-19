import React, { createContext, useState } from "react";

interface MyContextType {
  typeFilter: number[];
  ageFilter: number;
  ageUnitFilter: number;
  ratingFilter: number;
  titleFilter: string;
  setTypeFilter: (value: number[]) => void;
  setAgeFilter: (value: number) => void;
  setAgeUnitFilter: (value: number) => void;
  setRatingFilter: (value: number) => void;
  setTitleFilter: (value: string) => void;
}

export const MyContext = createContext<MyContextType>({
  typeFilter: [],
  ageFilter: 0,
  ageUnitFilter: 0,
  ratingFilter: 0,
  titleFilter: "",
  setTypeFilter: () => {},
  setAgeFilter: () => {},
  setAgeUnitFilter: () => {},
  setRatingFilter: () => {},
  setTitleFilter: () => {},
});

export const MyContextProvider = ({ children }: any) => {
  const [typeFilter, setTypeFilter] = useState<number[]>([]);
  const [ageFilter, setAgeFilter] = useState<number>(0);
  const [ageUnitFilter, setAgeUnitFilter] = useState<number>(0);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [titleFilter, setTitleFilter] = useState<string>("");
  const contextValue: MyContextType = {
    typeFilter,
    ageFilter,
    ageUnitFilter,
    ratingFilter,
    titleFilter,
    setTypeFilter,
    setAgeFilter,
    setAgeUnitFilter,
    setRatingFilter,
    setTitleFilter,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
