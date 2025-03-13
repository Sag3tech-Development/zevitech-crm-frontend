import { useContext } from "react";

import { CRMContext } from "@/context/crm-context";

export const useCRMContext = () => {
  const context = useContext(CRMContext);
  if (!context) {
    throw new Error("useCRMContext must be used within a CRMProvider");
  }
  return context;
};
