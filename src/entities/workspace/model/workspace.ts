import type { Task } from "@/entities/task";

export interface Workspace {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
}