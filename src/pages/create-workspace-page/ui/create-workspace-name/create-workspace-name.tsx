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
          Create A{" "}
          <span className="create-workspace__title-accent">
            Workspace.
          </span>
        </Typography>

        <Typography variant="body">
          Some text to fill in this space
        </Typography>
      </header>

      <form
        className="create-workspace__form"
        onSubmit={handleSubmit}
      >
        <Input
          name="workspace-name"
          label="Title your workspace"
          placeholder="Enter workspace name"
          hint="Information about the label"
          autoComplete="off"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required
        />

        <div className="button-step-container">
          <Button type="submit" size="lg">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default WorkspaceNameStep;
