import { Navigate, Outlet } from "react-router-dom";
import authStore from "../stores/authStore";

const PrivateRoutes = () => {
  const isAuthenticated = authStore((state) => state.isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
