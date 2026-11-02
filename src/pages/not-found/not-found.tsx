import { Link } from "react-router-dom";
import { ROUTE_PATH } from "@/app/router/route-path";

const NotFoundPage = () => {
  return (
    <main>
      <h1>404</h1>
      <Link to={ROUTE_PATH.HOME}>На главную</Link>
    </main>
  );
};

export default NotFoundPage;