
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Workspace } from "@/entities/workspace";
import { deleteTask, getWorkspaces, toggleTask } from "@/entities/workspace";
import { TaskCard } from "@/entities/task";
import { CreateTaskForm } from "@/features/create-task";
import { Typography } from "@/shared/ui";

import "./workspace-page.css";

type TaskFilter = "all" | "active" | "completed";

const WorkspacePage = () => {
  const { workspaceId } = useParams();

  const [workspace, setWorkspace] = useState<Workspace | null>(() => {
    if (!workspaceId) return null;

    return (
      getWorkspaces().find((item) => item.id === workspaceId) ?? null
    );
  });

  const [filter, setFilter] = useState<TaskFilter>("all");

  useEffect(() => {
    if (!workspaceId) {
      setWorkspace(null);
      return;
    }

    const currentWorkspace = getWorkspaces().find(
      (item) => item.id === workspaceId,
    );

    setWorkspace(currentWorkspace ?? null);
    setFilter("all");
  }, [workspaceId]);

  if (!workspace) {
    return (
      <main className="workspace-page">
        <Typography variant="h2">
          Workspace not found
        </Typography>
      </main>
    );
  }

  const tasks = workspace.tasks;

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  const filteredTasks = tasks
    .map((task, index) => ({ task, index }))
    .filter(({ task }) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;

      return true;
    });

  const handleToggleTask = (taskId: string) => {
    const updatedWorkspace = toggleTask(workspace.id, taskId);

    if (updatedWorkspace) {
      setWorkspace(updatedWorkspace);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedWorkspace = deleteTask(workspace.id, taskId);

    if (updatedWorkspace) {
      setWorkspace(updatedWorkspace);
    }
  };

  return (
    <main className="workspace-page">
      <header className="workspace-page__header">
        <div className="workspace-page__heading">
          <Typography variant="h1" as="h1">
            {workspace.name}
          </Typography>

          <Typography variant="body" as="p">
            {workspace.description || "Your tasks in one place."}
          </Typography>
        </div>

        <span className="workspace-page__total">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </span>
      </header>

      <section className="workspace-page__tasks">
        <div className="workspace-page__tasks-header">
          <div>
            <Typography variant="h2" as="h2">
              Tasks
            </Typography>

            <Typography variant="body-sm" as="p">
              Manage your tasks in this workspace.
            </Typography>
          </div>
        </div>

        <CreateTaskForm
          workspaceId={workspace.id}
          onTaskCreated={setWorkspace}
        />

        <div className="workspace-page__filters">
          <button
            type="button"
            className={`workspace-page__filter${filter === "all" ? " is-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
            <span>{tasks.length}</span>
          </button>

          <button
            type="button"
            className={`workspace-page__filter${filter === "active" ? " is-active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Active
            <span>{activeCount}</span>
          </button>

          <button
            type="button"
            className={`workspace-page__filter${filter === "completed" ? " is-active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
            <span>{completedCount}</span>
          </button>
        </div>

        {filteredTasks.length > 0 ? (
          <div className="workspace-page__task-grid">
            {filteredTasks.map(({ task, index }) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                onToggle={() => handleToggleTask(task.id)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))}
          </div>
        ) : (
          <div className="workspace-page__empty">
            <Typography variant="h3" as="h3">
              {tasks.length === 0
                ? "No tasks yet"
                : "No tasks found"}
            </Typography>

            <Typography variant="body-sm" as="p">
              {tasks.length === 0
                ? "Add your first task to get started."
                : "There are no tasks in this category."}
            </Typography>
          </div>
        )}
      </section>
    </main>
  );
};

export default WorkspacePage;
