import { createContext, useContext } from "react";

export const CardanoContext = createContext({
  provider: [],
  currentAcc: "",
});
export const useAdaContext = () => useContext(CardanoContext);
