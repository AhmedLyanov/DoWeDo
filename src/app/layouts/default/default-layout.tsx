import { Outlet } from "react-router-dom";

import Aside from "@/widgets/aside/aside";

import "./default-layout.css";

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Aside />

      <div className="default-layout__content">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;