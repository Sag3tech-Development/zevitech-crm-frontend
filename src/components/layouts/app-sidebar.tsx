"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { RoleTypeEnum } from "@/enums/role-type-enum";

import { SidebarNavigationLinks } from "@/constants/sidebar-navigation-links-data";

import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Logo from "../../../public/logos/zevitech-logo-white.png";

const AppSidebar = () => {
  const pathname = usePathname();

  const navigationLinks = SidebarNavigationLinks[RoleTypeEnum.ADMIN] || [];

  return (
    <Sidebar className="border-none">
      <SidebarHeader className="h-[85px] flex-center">
        <Image src={Logo} alt="Zevitech" width={120} />
      </SidebarHeader>

      <SidebarContent className="px-4 py-8 flex flex-col md:gap-8 gap-4">
        {navigationLinks.map((data, index) => (
          <Fragment key={index}>
            {data.submenu ? (
              <SidebarGroup>
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={data.title}
                    className="border-none text-white"
                  >
                    <AccordionTrigger className="py-0">
                      <div className="flex items-center gap-2 flex-row md:text-lg text-base transition-colors rounded-lg">
                        {data.icon}

                        <h1 className="translate-y-[2px]">{data.title}</h1>
                      </div>
                    </AccordionTrigger>
                    {data.submenu?.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.href} passHref>
                        <AccordionContent>
                          <div
                            className={cn(
                              subIndex === 0 && "mt-8",
                              pathname === subItem.href
                                ? "bg-primary"
                                : "hover:bg-primary hover:text-white",
                              "flex gap-2 items-center flex-row text-sm transition-colors rounded-lg py-3 px-2"
                            )}
                          >
                            <h1 className="translate-y-[2px]">
                              {subIndex + 1}. {subItem.title}
                            </h1>
                          </div>
                        </AccordionContent>
                      </Link>
                    ))}
                  </AccordionItem>
                </Accordion>
              </SidebarGroup>
            ) : (
              <Link href={data.href ?? "#"} passHref>
                <SidebarGroup
                  className={cn(
                    pathname === data.href
                      ? "bg-primary"
                      : "hover:bg-primary hover:text-white",
                    "flex items-center gap-2 flex-row md:text-lg text-base transition-colors rounded-lg"
                  )}
                >
                  {data.icon}

                  <h1 className="translate-y-[2px]">{data.title}</h1>
                </SidebarGroup>
              </Link>
            )}
          </Fragment>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
