import { IconType } from "react-icons/lib";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  icon: IconType;
  children: React.ReactNode;
}

const index = ({ icon: Icon, children }: Props) => {
  return (
    <div className={styles.row}>
      <Icon color="#666" />
      <Text color="grey">{children}</Text>
    </div>
  );
};

export default index;
