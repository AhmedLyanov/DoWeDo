import type { Workspace } from "@/entities/workspace";
import { getWorkspaces, saveWorkspaces } from "@/entities/workspace/model/workspace-storage";

interface CreateWorkspaceData {
  name: string;
  description: string;
}

export const useCreateWorkspace = () => {
  const createWorkspace = ({
    name,
    description,
  }: CreateWorkspaceData): Workspace => {
    const workspace: Workspace = {
      id: crypto.randomUUID(),
      name: name.trim(),
      description: description.trim(),
      tasks: [],
    };

    const workspaces = getWorkspaces();

    saveWorkspaces([...workspaces, workspace]);

    return workspace;
  };

  return { createWorkspace };
};