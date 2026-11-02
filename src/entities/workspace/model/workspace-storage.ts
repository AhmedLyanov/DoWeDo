
import type { Task } from "@/entities/task";
import type { Workspace } from "./workspace";

const STORAGE_KEY = "dowedo-workspaces";

export const getWorkspaces = (): Workspace[] => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return [];

  try {
    return JSON.parse(stored) as Workspace[];
  } catch {
    return [];
  }
};

export const saveWorkspaces = (workspaces: Workspace[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workspaces));
};

export const createTask = (
  workspaceId: string,
  title: string,
): Workspace | null => {
  const normalizedTitle = title.trim();

  if (!normalizedTitle) return null;

  const workspaces = getWorkspaces();

  const workspace = workspaces.find(
    (item) => item.id === workspaceId,
  );

  if (!workspace) return null;

  const task: Task = {
    id: crypto.randomUUID(),
    title: normalizedTitle,
    completed: false,
  };

  const updatedWorkspace: Workspace = {
    ...workspace,
    tasks: [...workspace.tasks, task],
  };

  saveWorkspaces(
    workspaces.map((item) =>
      item.id === workspaceId ? updatedWorkspace : item,
    ),
  );

  return updatedWorkspace;
};

export const toggleTask = (
  workspaceId: string,
  taskId: string,
): Workspace | null => {
  const workspaces = getWorkspaces();

  const workspace = workspaces.find(
    (item) => item.id === workspaceId,
  );

  if (!workspace) return null;

  const taskExists = workspace.tasks.some(
    (task) => task.id === taskId,
  );

  if (!taskExists) return null;

  const updatedWorkspace: Workspace = {
    ...workspace,
    tasks: workspace.tasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task,
    ),
  };

  saveWorkspaces(
    workspaces.map((item) =>
      item.id === workspaceId ? updatedWorkspace : item,
    ),
  );

  return updatedWorkspace;
};

export const deleteTask = (
  workspaceId: string,
  taskId: string,
): Workspace | null => {
  const workspaces = getWorkspaces();

  const workspace = workspaces.find(
    (item) => item.id === workspaceId,
  );

  if (!workspace) return null;

  const taskExists = workspace.tasks.some(
    (task) => task.id === taskId,
  );

  if (!taskExists) return null;

  const updatedWorkspace: Workspace = {
    ...workspace,
    tasks: workspace.tasks.filter(
      (task) => task.id !== taskId,
    ),
  };

  saveWorkspaces(
    workspaces.map((item) =>
      item.id === workspaceId ? updatedWorkspace : item,
    ),
  );

  return updatedWorkspace;
};
