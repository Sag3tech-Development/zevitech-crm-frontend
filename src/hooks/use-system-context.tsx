"use client";

import { useContext } from "react";

import { SystemContext } from "@/context/system-context";

export const useSystemContext = () => {
  const context = useContext(SystemContext);

  if (!context) {
    throw new Error("useSystemContext must be used within a SystemProvider");
  }
  return context;
};
