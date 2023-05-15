import { BsCheck } from "react-icons/bs";
import Button from "../Button";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  children: string;
  isActive?: string;
  setActive: (p: string) => void;
  id: string;
}

const Variant = ({ children, isActive, setActive, id }: Props) => {
  return (
    <div className={styles.variant}>
      <Button
        onClick={() => setActive(id)}
        color={isActive === id ? "#0066F1" : "#666"}
        bg="white"
        icon={BsCheck}
      />
      <Text
        color={isActive === id ? "blue" : "grey"}
        style={{ paddingLeft: "15px" }}
      >
        {children}
      </Text>
    </div>
  );
};

export default Variant;
