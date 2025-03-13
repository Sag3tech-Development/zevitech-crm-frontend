import { SidebarNavigationLinksInterface } from "@/interfaces/layout-interfaces";

import { BiSolidBriefcase } from "react-icons/bi";
import { IoStorefront, IoFingerPrint } from "react-icons/io5";
import { PiPulseBold } from "react-icons/pi";
import { FaUserFriends, FaEdit } from "react-icons/fa";
import { HiMiniBanknotes } from "react-icons/hi2";

export const SidebarNavigationLinks: Record<
  string,
  SidebarNavigationLinksInterface[]
> = {
  admin: [
    {
      href: "/admin/dashboard",
      title: "Dashboard",
      icon: (
        <BiSolidBriefcase className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
      ),
    },

    {
      title: "Brands",
      icon: (
        <IoStorefront className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
      ),
      submenu: [
        { href: "/admin/brands/secure-your-mark", title: "Secure Your Mark" },
        {
          href: "/admin/brands/legal-trademark-office",
          title: "Legal Trademark Office",
        },
        {
          href: "/admin/brands/tribune-book-publishing",
          title: "Tribune Book Publishing",
        },
      ],
    },

    {
      href: "/admin/tracking",
      title: "Tracking",
      icon: (
        <PiPulseBold className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
      ),
    },

    {
      href: "/admin/employees",
      title: "Employees",
      icon: (
        <FaUserFriends className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
      ),
    },

    {
      href: "/admin/payment",
      title: "Payments",
      icon: (
        <HiMiniBanknotes className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
      ),
    },

    {
      href: "/admin/security",
      title: "Security",
      icon: (
        <IoFingerPrint className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
      ),
    },

    {
      href: "/admin/management",
      title: "Management",
      icon: <FaEdit className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />,
    },
  ],

  manager: [
    {
      href: "/manager/dashboard",
      title: "Dashboard",
      icon: (
        <BiSolidBriefcase className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
      ),
    },
  ],

  seller: [
    {
      href: "/front-seller/dashboard",
      title: "Dashboard",
      icon: (
        <BiSolidBriefcase className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]" />
      ),
    },
  ],
} as const;
