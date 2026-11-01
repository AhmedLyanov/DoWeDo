
import { ArrowRight, Check, Circle, RotateCcw, Trash2 } from "lucide-react";

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
            {task.completed ? "Completed" : "Active"}
          </span>

          <button
            className="task-card__delete"
            type="button"
            onClick={onDelete}
            aria-label="Delete task"
            title="Delete task"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      <p className="task-card__title">
        {task.title}
      </p>

      <div className="task-card__footer">
        <button
          className="task-card__toggle"
          type="button"
          onClick={onToggle}
        >
          {task.completed ? (
            <>
              <RotateCcw size={14} />
              <span>Mark as active</span>
            </>
          ) : (
            <>
              <Circle size={14} />
              <span>Mark as completed</span>
              <ArrowRight size={14} />
            </>
          )}
        </button>

        {task.completed && (
          <span className="task-card__completed-icon">
            <Check size={13} />
          </span>
        )}
      </div>
    </article>
  );
};

export default TaskCard;
