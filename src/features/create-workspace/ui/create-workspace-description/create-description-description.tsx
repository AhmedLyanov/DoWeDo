import "./create-workspace-description.css";

import { Button, Typography } from "@/shared/ui";

interface WorkspaceDescriptionStepProps {
  value: string;
  onChange: (value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}

const WorkspaceDescriptionStep = ({
  value,
  onChange,
  onBack,
  onSubmit,
}: WorkspaceDescriptionStepProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <>
      <header className="create-workspace__header">
        <Typography variant="h1">
          Опишите пространство.
        </Typography>

        <Typography variant="body">
          Расскажите, для чего предназначено это пространство.
        </Typography>
      </header>

      <form
        className="create-workspace__form workspace-description"
        onSubmit={handleSubmit}
      >
        <div className="workspace-description__field">
          <Typography variant="body">
            Описание
          </Typography>

          <textarea
            name="workspace-description"
            className="workspace-description__textarea"
            placeholder="Введите описание..."
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
        </div>

        <div className="workspace-description__actions">
          <Button type="button" onClick={onBack}>
            Назад
          </Button>

          <Button type="submit">
            Создать пространство
          </Button>
        </div>
      </form>
    </>
  );
};

export default WorkspaceDescriptionStep;