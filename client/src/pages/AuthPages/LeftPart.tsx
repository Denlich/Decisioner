import Heading from "../../components/Heading";
import Text from "../../components/Text";

import styles from "./index.module.css";

const LeftPart = () => {
  return (
    <div className={styles.leftPart}>
      <Heading>Decisioner</Heading>
      <Text color="grey">Welcome! Register to start</Text>
    </div>
  );
};

export default LeftPart;
