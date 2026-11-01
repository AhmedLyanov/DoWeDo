
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Workspace } from "@/entities/workspace";
import { getWorkspaces } from "@/entities/workspace/model/workspace-storage";
import WorkspaceCard from "@/entities/workspace/ui/workspace-card/workspace-card";
import { Typography } from "@/shared/ui";

import "./home-page.css";

const HomePage = () => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setWorkspaces(getWorkspaces());
  }, []);

  return (
    <main className="home-page">
      <header className="home-page__header">
        <div className="home-page__heading">
          <Typography variant="h1" as="h1">
            Your Workspaces
          </Typography>

          <Typography variant="body" as="p">
            Everything you need to stay organized and get things done.
          </Typography>
        </div>

        <Typography variant="caption" as="span">
          {workspaces.length}{" "}
          {workspaces.length === 1 ? "workspace" : "workspaces"}
        </Typography>
      </header>

      {workspaces.length > 0 ? (
        <section className="home-page__workspaces">
          {workspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              onClick={() => navigate(`/workspace/${workspace.id}`)}
            />
          ))}
        </section>
      ) : (
        <section className="home-page__empty">
          <div className="home-page__empty-icon">
            <span />
            <span />
            <span />
          </div>

          <Typography variant="h3" as="h2">
            No workspaces yet
          </Typography>

          <Typography variant="body-sm" as="p">
            Create your first workspace to start organizing your tasks.
          </Typography>
        </section>
      )}

      <section className="home-page__banner">
        <Typography variant="h2" as="h2">
          Motivation to help
          <br />
          you work.
        </Typography>
      </section>
    </main>
  );
};

export default HomePage;
