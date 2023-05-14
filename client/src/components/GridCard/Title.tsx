import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  return (
    <div className={styles.textContainer}>
      <Text>{children}</Text>
    </div>
  );
};

export default Title;
