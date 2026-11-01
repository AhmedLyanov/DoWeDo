import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  LayoutDashboard,
  ListTodo,
  Settings,
} from "lucide-react";

import { ROUTE_PATH } from "@/app/router/route-path";
import { Typography } from "@/shared/ui";

import "./sidebar.css";

const Sidebar = () => {
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  const navigation = [
    {
      label: "Overview",
      path: `/workspace/${workspaceId}`,
      icon: LayoutDashboard,
    },
    {
      label: "Tasks",
      path: `/workspace/${workspaceId}/tasks`,
      icon: ListTodo,
    },
    {
      label: "Settings",
      path: `/workspace/${workspaceId}/settings`,
      icon: Settings,
    },
  ];

  return (
    <aside className="workspace-sidebar">
      <button
        className="workspace-sidebar__back"
        type="button"
        onClick={() => navigate(ROUTE_PATH.HOME)}
      >
        <ArrowLeft size={18} strokeWidth={2} />

        <span>Back to Home</span>
      </button>

      <div className="workspace-sidebar__header">
        <Typography variant="h3" as="span">
          My Workspace
        </Typography>

        <Typography variant="caption">
          Workspace
        </Typography>
      </div>

      <nav className="workspace-sidebar__navigation">
        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            end={label === "Overview"}
            className={({ isActive }) =>
              `workspace-sidebar__link${isActive ? " is-active" : ""}`
            }
          >
            <Icon size={18} strokeWidth={1.8} />

            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;