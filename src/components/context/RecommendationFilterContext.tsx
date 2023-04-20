import React, { createContext, useState } from "react";

interface MyContextType {
  typeFilter: number[];
  fromAgeFilter: number;
  toAgeFilter: number;
  ageUnitFilter: number;
  ratingFilter: number;
  titleFilter: string;
  setTypeFilter: (value: number[]) => void;
  setFromAgeFilter: (value: number) => void;
  setToAgeFilter: (value: number) => void;
  setAgeUnitFilter: (value: number) => void;
  setRatingFilter: (value: number) => void;
  setTitleFilter: (value: string) => void;
}

export const MyContext = createContext<MyContextType>({
  typeFilter: [],
  fromAgeFilter: 0,
  toAgeFilter: 0,
  ageUnitFilter: 0,
  ratingFilter: 0,
  titleFilter: "",
  setTypeFilter: () => {},
  setFromAgeFilter: () => {},
  setToAgeFilter: () => {},
  setAgeUnitFilter: () => {},
  setRatingFilter: () => {},
  setTitleFilter: () => {},
});

export const MyContextProvider = ({ children }: any) => {
  const [typeFilter, setTypeFilter] = useState<number[]>([]);
  const [fromAgeFilter, setFromAgeFilter] = useState<number>(0);
  const [toAgeFilter, setToAgeFilter] = useState<number>(0);
  const [ageUnitFilter, setAgeUnitFilter] = useState<number>(0);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [titleFilter, setTitleFilter] = useState<string>("");
  const contextValue: MyContextType = {
    typeFilter,
    fromAgeFilter,
    toAgeFilter,
    ageUnitFilter,
    ratingFilter,
    titleFilter,
    setTypeFilter,
    setFromAgeFilter,
    setToAgeFilter,
    setAgeUnitFilter,
    setRatingFilter,
    setTitleFilter,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
