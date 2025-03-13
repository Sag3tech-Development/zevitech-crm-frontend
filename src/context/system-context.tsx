"use client";

import { createContext, useState, ReactNode } from "react";

import { SystemState, RoleType } from "@/interfaces/context-interfaces";
import { RoleTypeEnum } from "@/enums/role-type-enum";

export const SystemContext = createContext<SystemState | undefined>(undefined);

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<RoleType>(RoleTypeEnum.ADMIN);

  const value: SystemState = {
    role,
    setRole,
  };

  return (
    <SystemContext.Provider value={value}>{children}</SystemContext.Provider>
  );
};
