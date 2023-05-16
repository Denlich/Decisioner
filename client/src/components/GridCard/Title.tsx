import Text from "../Text";
import Time from "../Time";

import styles from "./index.module.css";

interface Props {
  children: string;
  date: Date;
}

const Title = ({ children, date }: Props) => {
  return (
    <div className={styles.textContainer}>
      <Text style={{ fontSize: "18px", marginBottom: "10px" }}>{children}</Text>
      <Time date={date} />
    </div>
  );
};

export default Title;
