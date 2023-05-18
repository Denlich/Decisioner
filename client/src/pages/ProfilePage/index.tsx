import Heading from "../../components/Heading";
import Text from "../../components/Text";
import user from "../../assets/I_end.png";

import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <img className={styles.user} src={user} />
      <div className={styles.info}>
        <Heading>Denys Mykhailovych</Heading>
        <Text color="grey">@Denlich</Text>
      </div>
    </div>
  );
};

export default index;
