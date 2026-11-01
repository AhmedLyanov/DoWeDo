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
        <Typography variant="h1">Describe Workspace.</Typography>

        <Typography variant="body">
          Description of what your workspace is for.
        </Typography>
      </header>

      <form
        className="create-workspace__form workspace-description"
        onSubmit={handleSubmit}
      >
        <div className="workspace-description__field">
          <Typography variant="body" as="label">
            Textarea
          </Typography>

          <textarea
            id="workspace-description"
            name="workspace-description"
            className="workspace-description__textarea"
            placeholder="Type your content here...."
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
        </div>

        <div className="workspace-description__actions">
          <div className="button-step-container">
            <Button type="button" variant="primary" size="lg" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" size="lg">
              Create Workspace
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default WorkspaceDescriptionStep;
