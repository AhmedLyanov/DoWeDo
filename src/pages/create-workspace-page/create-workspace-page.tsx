import "./create-workspace-page.css";

import onboardingBg from "@/shared/assets/media/onboarding-bg.png";
import { CreateWorkspaceForm } from "@/features/create-workspace";

const CreateWorkspacePage = () => {
  return (
    <main className="create-workspace">
      <div className="create-workspace__container">
        <section className="create-workspace__visual">
          <img src={onboardingBg} alt="Иллюстрация рабочего пространства" />
        </section>

        <section className="create-workspace__content">
          <CreateWorkspaceForm />
        </section>
      </div>
    </main>
  );
};

export default CreateWorkspacePage;