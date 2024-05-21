import React, { createContext, useMemo, useState } from "react";
import HookInterface, { emptyHook } from "../../interfaces/HookInterface";

export interface HookContextModel {
  HookObject: HookInterface;
  setHookObject?: (value: HookInterface) => void;
}

export const HookContext = createContext<HookContextModel>({
  HookObject: emptyHook,
  setHookObject: undefined,
});

export const HookContextProvider = ({ children, value }: any | null) => {
  const [HookObjectData, setHookObjectData] = useState<HookInterface>(
    value === undefined ? emptyHook : value
  );
  const contextValue = useMemo(() => {
    return {
      HookObject: HookObjectData,
      setHookObject: setHookObjectData,
    };
  }, [HookObjectData, setHookObjectData]);

  return (
    <HookContext.Provider value={contextValue}>{children}</HookContext.Provider>
  );
};

export const HookFullContextProvider = ({
  children,
  value,
  setValue,
}: any | null) => {
  const contextValue = useMemo(() => {
    return {
      HookObject: value,
      setHookObject: setValue,
    };
  }, [value, setValue]);

  return (
    <HookContext.Provider value={contextValue}>{children}</HookContext.Provider>
  );
};
