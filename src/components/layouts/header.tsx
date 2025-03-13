import React from "react";

import { SidebarTrigger } from "../ui/sidebar";
import Notification from "./notification";

const Header = () => {
  return (
    <header className="h-[85px] bg-white border-b w-full">
      <div className="layout-standard h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
        </div>

        <div className="flex items-center gap-3">
          <Notification />
        </div>
      </div>
    </header>
  );
};

export default Header;
