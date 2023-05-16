import { Navigate } from "react-router-dom";
import { AuthorizationForm } from "../../components/Forms";
import authStore from "../../stores/authStore";
import LeftPart from "./LeftPart";

import styles from "./index.module.css";

const LoginPage = () => {
  return (
    <div className={styles.grid}>
      <LeftPart />
      <AuthorizationForm />
    </div>
  );
};

export default LoginPage;
