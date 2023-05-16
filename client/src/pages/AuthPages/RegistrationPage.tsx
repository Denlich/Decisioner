import { RegistrationForm } from "../../components/Forms";
import LeftPart from "./LeftPart";

import styles from "./index.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.grid}>
      <LeftPart />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
