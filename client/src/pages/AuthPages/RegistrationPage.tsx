import { Navigate } from "react-router-dom";
import { RegistrationForm } from "../../components/Forms";
import authStore from "../../stores/authStore";
import LeftPart from "./LeftPart";

import styles from "./index.module.css";

const RegistrationPage = () => {
  const isAuth = authStore.getState().isAuthenticated;

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <LeftPart />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
