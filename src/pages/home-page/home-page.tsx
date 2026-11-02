
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTE_PATH } from "@/app/router/route-path";
import type { Workspace } from "@/entities/workspace";
import { getWorkspaces } from "@/entities/workspace/model/workspace-storage";
import WorkspaceCard from "@/entities/workspace/ui/workspace-card/workspace-card";
import { Button, Typography } from "@/shared/ui";

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
            Ваши пространства
          </Typography>

          <Typography variant="body" as="p">
            Всё необходимое, чтобы поддерживать порядок и справляться с делами.
          </Typography>
        </div>

        <Typography variant="caption" as="span">
          Рабочих пространств: {workspaces.length}
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
            Пока нет рабочих пространств
          </Typography>

          <Typography variant="body-sm" as="p">
            Создайте первое пространство, чтобы упорядочить свои задачи.
          </Typography>

          <Button
            type="button"
            onClick={() => navigate(ROUTE_PATH.CREATE_WORKSPACE)}
          >
            Создать пространство
          </Button>
        </section>
      )}

      <section className="home-page__banner">
        <Typography variant="h2" as="h2">
          Пусть ничто не мешает
          <br />
          продуктивной работе.
        </Typography>
      </section>
    </main>
  );
};

export default HomePage;
