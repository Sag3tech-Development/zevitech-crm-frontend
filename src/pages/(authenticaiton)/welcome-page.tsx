"use client";

import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { RoleTypeEnum } from "@/enums/role-type-enum";

import { useCRMContext } from "@/hooks/use-crm-context";

import Logo from "../../../public/logos/zevitech-logo-white.png";

const WelcomePage = () => {
  const { role } = useCRMContext();
  const router = useRouter();

  const roleRoutes = useMemo(
    () => ({
      [RoleTypeEnum.ADMIN]: "/admin/dashboard",
      [RoleTypeEnum.MANAGER]: "/manager/dashboard",
      [RoleTypeEnum.SCRAPPER]: "/scrapper/dashboard",
      [RoleTypeEnum.SELLER]: "/seller/dashboard",
      [RoleTypeEnum.SUPPORT]: "/support/dashboard",
    }),
    []
  );

  useEffect(() => {
    if (!role) return;

    const timer = setTimeout(() => {
      const path = roleRoutes[role];
      if (path) router.push(path);
    }, 4000);

    return () => clearTimeout(timer);
  }, [role, router, roleRoutes]);

  return (
    <main className="h-[100svh] w-[100svw] bg-black flex-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="w-full h-full flex items-center justify-center"
      >
        <Image src={Logo} alt="Zevitech" className="w-[70%]" priority />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 top-0 bg-black"
      />
    </main>
  );
};

export default WelcomePage;
