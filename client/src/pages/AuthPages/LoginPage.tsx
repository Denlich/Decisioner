import { Navigate } from "react-router-dom";
import { AuthorizationForm } from "../../components/Forms";
import authStore from "../../stores/authStore";
import LeftPart from "./LeftPart";

import styles from "./index.module.css";

const LoginPage = () => {
  const isAuth = authStore.getState().isAuthenticated;

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.grid}>
      <LeftPart />
      <AuthorizationForm />
    </div>
  );
};

export default LoginPage;
