import React, { createContext, useMemo, useState } from "react";
import SpecialistInterface, {
  emptySpecialist,
} from "../../interfaces/SpecialistInterface";

export interface SpecialistContextModel {
  specialistObject: SpecialistInterface;
  setSpecialistObject?: (value: SpecialistInterface) => void;
}

export const SpecialistContext = createContext<SpecialistContextModel>({
  specialistObject: emptySpecialist,
  setSpecialistObject: undefined,
});

export const SpecialistContextProvider = ({ children }: any | null) => {
  const [specialistObjectData, setSpecialistObjectData] =
    useState<SpecialistInterface>(emptySpecialist);
  const contextValue = useMemo(() => {
    return {
      specialistObject: specialistObjectData,
      setSpecialistObject: setSpecialistObjectData,
    };
  }, [specialistObjectData, setSpecialistObjectData]);

  return (
    <SpecialistContext.Provider value={contextValue}>
      {children}
    </SpecialistContext.Provider>
  );
};
