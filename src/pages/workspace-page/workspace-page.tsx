import { useParams, Link } from "react-router-dom";
import { ROUTE_PATH } from "@/app/router/route-path";

const WorkspacePage = () => {
  const { workspaceId } = useParams<{ workspaceId: string }>();

  return (
    <main>
      <h1>Workspace</h1>

      <p>Workspace ID: {workspaceId}</p>

      <Link to={ROUTE_PATH.HOME}>
        Back to home
      </Link>
    </main>
  );
};

export default WorkspacePage;