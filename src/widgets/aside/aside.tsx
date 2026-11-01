
import { useNavigate } from "react-router-dom";
import { House, Plus } from "lucide-react";

import { ROUTE_PATH } from "@/app/router/route-path";

import "./aside.css";

const Aside = () => {
  const navigate = useNavigate();

  return (
    <aside className="app-aside">
      <button
        className="app-aside__brand"
        type="button"
        aria-label="Go to home"
        title="Home"
        onClick={() => navigate(ROUTE_PATH.HOME)}
      >
        <House size={29} strokeWidth={2.2} />
      </button>

      <button
        className="app-aside__create"
        type="button"
        aria-label="Create workspace"
        title="Create workspace"
        onClick={() => navigate(ROUTE_PATH.CREATE_WORKSPACE)}
      >
        <Plus size={28} strokeWidth={2} />
      </button>
    </aside>
  );
};

export default Aside;
