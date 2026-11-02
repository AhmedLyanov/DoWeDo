import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./create-workspace-form.css";

import WorkspaceNameStep from "../create-workspace-name/create-workspace-name";
import WorkspaceDescriptionStep from "../create-workspace-description/create-description-description";

import { useCreateWorkspace } from "../../model/use-create-worksapce";


interface WorkspaceFormData {
  name: string;
  description: string;
}

const CreateWorkspaceForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const { createWorkspace } = useCreateWorkspace();

  const navigate = useNavigate();

  const [formData, setFormData] = useState<WorkspaceFormData>({
    name: "",
    description: "",
  });

  const handleNext = () => {
    if (!formData.name.trim()) return;

    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const updateField = (field: keyof WorkspaceFormData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleCreate = () => {
    const workspace = createWorkspace(formData);


    navigate(`/workspace/${workspace.id}`);
  };

  return (
    <div key={step} className="create-workspace-form">
      {step === 1 ? (
        <WorkspaceNameStep
          value={formData.name}
          onChange={(value) => updateField("name", value)}
          onSubmit={handleNext}
        />
      ) : (
        <WorkspaceDescriptionStep
          value={formData.description}
          onChange={(value) => updateField("description", value)}
          onBack={handleBack}
          onSubmit={handleCreate}
        />
      )}
    </div>
  );
};

export default CreateWorkspaceForm;
