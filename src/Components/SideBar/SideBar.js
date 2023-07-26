import React from "react";
import SideBarHome from "./SideBarHome/SideBarHome";
import SideBarLibrary from "./SideBarLibrary/SideBarLibrary";

const SideBar = () => {
  return (
    <div>
      <SideBarHome />
      <div>
        <SideBarLibrary />
      </div>
    </div>
  );
};

export default SideBar;
