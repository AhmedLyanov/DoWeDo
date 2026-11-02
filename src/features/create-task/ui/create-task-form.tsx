import { useState, type FormEvent } from "react";

import type { Workspace } from "@/entities/workspace";
import { Button, Input } from "@/shared/ui";

import { useCreateTask } from "../../create-task/model/use-create-task";

import "./create-task-form.css";

interface CreateTaskFormProps {
  workspaceId: string;
  onTaskCreated: (workspace: Workspace) => void;
}

const CreateTaskForm = ({
  workspaceId,
  onTaskCreated,
}: CreateTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const { createTask } = useCreateTask(workspaceId);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
      setError("Введите название задачи");
      return;
    }

    const updatedWorkspace = createTask(normalizedTitle);

    if (!updatedWorkspace) {
      setError("Пространство не найдено");
      return;
    }

    onTaskCreated(updatedWorkspace);
    setTitle("");
    setError("");
  };

  const handleChange = (value: string) => {
    setTitle(value);

    if (error) {
      setError("");
    }
  };

  return (
    <form
      className="create-task-form"
      onSubmit={handleSubmit}
    >
      <div className="create-task-form__input">
        <Input
          placeholder="Введите задачу..."
          value={title}
          onChange={(event) => handleChange(event.target.value)}
          error={error}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
      >
        Добавить задачу
      </Button>
    </form>
  );
};

export default CreateTaskForm;