
import { Check, Trash2 } from "lucide-react";

import type { Task } from "@/entities/task";

import "./task-card.css";

interface TaskCardProps {
  task: Task;
  index: number;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskCard = ({
  task,
  index,
  onToggle,
  onDelete,
}: TaskCardProps) => {
  return (
    <article
      className={`task-card${task.completed ? " is-completed" : ""}`}
    >
      <div className="task-card__header">
        <span className="task-card__number">
          T-{String(index + 1).padStart(2, "0")}
        </span>

        <div className="task-card__header-actions">
          <span
            className={`task-card__status${
              task.completed ? " is-completed" : ""
            }`}
          >
            {task.completed ? "Выполнена" : "Активна"}
          </span>

          <button
            className="task-card__delete"
            type="button"
            onClick={onDelete}
            aria-label="Удалить задачу"
            title="Удалить задачу"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      <div className="task-card__main">
        <button
          className="task-card__checkbox"
          type="button"
          onClick={onToggle}
          aria-label={
            task.completed
              ? "Вернуть задачу в активные"
              : "Отметить задачу выполненной"
          }
          aria-pressed={task.completed}
          title={
            task.completed
              ? "Вернуть задачу в активные"
              : "Отметить задачу выполненной"
          }
        >
          {task.completed && <Check size={17} strokeWidth={2.5} />}
        </button>

        <p className="task-card__title">{task.title}</p>
      </div>
    </article>
  );
};

export default TaskCard;
