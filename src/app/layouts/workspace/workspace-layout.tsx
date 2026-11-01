import { Outlet } from "react-router-dom";

import Sidebar from "@/widgets/sidebar/sidebar";

import "./workspace-layout.css";

const WorkspaceLayout = () => {
  return (
    <div className="workspace-layout">
      <Sidebar />

      <main className="workspace-layout__content">
        <Outlet />
      </main>
    </div>
  );
};

export default WorkspaceLayout;