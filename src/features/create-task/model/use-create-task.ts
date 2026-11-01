import { createTask } from "@/entities/workspace";

export const useCreateTask = (workspaceId: string) => {
  const handleCreateTask = (title: string) => {
    return createTask(workspaceId, title);
  };

  return {
    createTask: handleCreateTask,
  };
};