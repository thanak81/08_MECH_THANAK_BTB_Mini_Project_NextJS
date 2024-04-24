import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

function layout({ children }) {
  return (
    <>
      <div className="w-[400px] lg:block">
        <SidebarComponent />
        </div>
        <div className="divider ml-0 divider-horizontal mr-0"></div>
        <div className="w-full flex flex-col gap-5 pr-5">
          <NavbarComponent />
          {children}
        </div>
    </>
  );
}

export default layout;
