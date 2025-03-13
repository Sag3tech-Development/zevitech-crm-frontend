import { JSX } from "react";

export type SidebarNavigationLinksInterface = {
  title: string;
  icon: JSX.Element;
  href?: string;
  submenu?: { href: string; title: string }[];
};
