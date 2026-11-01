import { useState } from "react";
import "./create-workspace-page.css";

import onboardingBg from "@/shared/assets/media/onboarding-bg.png";

import WorkspaceNameStep from "./ui/create-workspace-name/create-workspace-name";
import WorkspaceDescriptionStep from "./ui/create-workspace-description/create-description-description";

interface WorkspaceFormData {
  name: string;
  description: string;
}

const CreateWorkspacePage = () => {
  const [step, setStep] = useState<1 | 2>(1);

  const [formData, setFormData] = useState<WorkspaceFormData>({
    name: "",
    description: "",
  });

  const updateFormData = (
    field: keyof WorkspaceFormData,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (!formData.name.trim()) return;

    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleCreate = () => {
    const workspace = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      description: formData.description.trim(),
      tasks: [],
    };

    console.log("Created workspace:", workspace);
  };

  return (
    <main className="create-workspace">
      <div className="create-workspace__container">
        <section className="create-workspace__visual">
          <img
            src={onboardingBg}
            alt="Workspace illustration"
          />
        </section>

        <section className="create-workspace__content">
          <div
            key={step}
            className={`create-workspace__form-wrapper ${
              step === 2 ? "create-workspace__form-wrapper--description" : ""
            }`}
          >
            {step === 1 ? (
              <WorkspaceNameStep
                value={formData.name}
                onChange={(value) => updateFormData("name", value)}
                onSubmit={handleNext}
              />
            ) : (
              <WorkspaceDescriptionStep
                value={formData.description}
                onChange={(value) =>
                  updateFormData("description", value)
                }
                onBack={handleBack}
                onSubmit={handleCreate}
              />
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CreateWorkspacePage;