"use client";

import { createContext, useState, ReactNode } from "react";

import { CRMState, RoleType } from "@/interfaces/context-interfaces";
import { RoleTypeEnum } from "@/enums/role-type-enum";

export const CRMContext = createContext<CRMState | undefined>(undefined);

export const CRMProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<RoleType>(RoleTypeEnum.ADMIN);

  const value: CRMState = {
    role,
    setRole,
  };

  return <CRMContext.Provider value={value}>{children}</CRMContext.Provider>;
};
