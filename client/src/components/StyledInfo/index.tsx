import { IconType } from "react-icons/lib";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  icon: IconType;
  text: string | number;
}

const index = ({ icon: Icon, text }: Props) => {
  return (
    <div className={styles.row}>
      <Icon color="#666" />
      <Text color="grey">{text}</Text>
    </div>
  );
};

export default index;
