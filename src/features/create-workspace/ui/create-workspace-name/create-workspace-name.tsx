import { Button, Input, Typography } from "@/shared/ui";

interface WorkspaceNameStepProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const WorkspaceNameStep = ({
  value,
  onChange,
  onSubmit,
}: WorkspaceNameStepProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <>
      <header className="create-workspace__header">
        <Typography variant="h1">
          Создайте{" "}
          <span className="create-workspace__title-accent">
            пространство.
          </span>
        </Typography>

        <Typography variant="body">
          Дайте пространству название, чтобы начать работу.
        </Typography>
      </header>

      <form
        className="create-workspace__form"
        onSubmit={handleSubmit}
      >
        <Input
          name="workspace-name"
          label="Название пространства"
          placeholder="Введите название"
          hint="Например, «Личные задачи» или «Рабочий проект»"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
          required
        />

        <Button type="submit" size="lg">
          Далее
        </Button>
      </form>
    </>
  );
};

export default WorkspaceNameStep;