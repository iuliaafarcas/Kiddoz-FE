import { createContext, useMemo, useState } from "react";

export const IdRecommendationContext = createContext(1);

// export const IdRecommendationProvider = ({ children, value }: any | null) => {
//   const [idObjectData, setidObjectData] = useState<number>(0);
//   const contextValue = useMemo(() => {
//     return {
//       idObject: idObjectData,
//       setidObject: setidObjectData,
//     };
//   }, [idObjectData, setidObjectData]);

//   return (
//     <IdRecommendationContext.Provider value={contextValue}>
//       {children}
//     </IdRecommendationContext.Provider>
//   );
// };
