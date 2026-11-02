import type { Workspace } from "../../model/workspace";
import { Typography } from "@/shared/ui";
import { ArrowUpRight, Check, Circle } from "lucide-react";
import "./workspace-card.css";

interface WorkspaceCardProps {
  workspace: Workspace;
  onClick?: () => void;
}

const WorkspaceCard = ({
  workspace,
  onClick,
}: WorkspaceCardProps) => {
  const completedTasks = workspace.tasks.filter(
    (task) => task.completed,
  ).length;


  const previewTasks = workspace.tasks.slice(0, 3);

  return (
    <article
      className="workspace-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.();
        }
      }}
    >
      <span className="workspace-card__arrow">
        <ArrowUpRight size={17} />
      </span>

      <div className="workspace-card__content">
        <Typography variant="h3" as="h3">
          {workspace.name}
        </Typography>

        <Typography variant="body-sm" as="p">
          {workspace.description || "Пока нет описания"}
        </Typography>
      </div>

      <div className="workspace-card__tasks">
        <div className="workspace-card__tasks-header">
          <Typography variant="caption">
            Задачи
          </Typography>

          <span className="workspace-card__task-count">
            {completedTasks}/{workspace.tasks.length}
          </span>
        </div>

        {previewTasks.length > 0 ? (
          <div className="workspace-card__task-list">
            {previewTasks.map((task) => (
              <div
                className="workspace-card__task"
                key={task.id}
              >
                <span
                  className={
                    task.completed
                      ? "workspace-card__task-icon is-completed"
                      : "workspace-card__task-icon"
                  }
                >
                  {task.completed ? (
                    <Check size={11} />
                  ) : (
                    <Circle size={11} />
                  )}
                </span>

                <span
                  className={
                    task.completed
                      ? "workspace-card__task-title is-completed"
                      : "workspace-card__task-title"
                  }
                >
                  {task.title}
                </span>
              </div>
            ))}

            {workspace.tasks.length > 3 && (
              <span className="workspace-card__more">
                Ещё задач: {workspace.tasks.length - 3}
              </span>
            )}
          </div>
        ) : (
          <div className="workspace-card__empty">
            <Typography variant="caption">
              Пока нет задач
            </Typography>
          </div>
        )}
      </div>

    
    </article>
  );
};

export default WorkspaceCard;