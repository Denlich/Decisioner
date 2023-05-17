import { BsCheck, BsEye } from "react-icons/bs";
import Button from "../Button";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  children: string;
  isActive?: string;
  setActive?: (p: string) => void;
  id?: string;
  votes?: number;
  isResults?: boolean;
}

const Variant = ({
  children,
  isActive,
  setActive,
  id,
  votes,
  isResults = false,
}: Props) => {
  return (
    <div className={styles.variant}>
      <div className={styles.block}>
        <Button
          onClick={setActive ? () => setActive(id!) : () => {}}
          color={isActive === id || isResults ? "#0066F1" : "#666"}
          bg="white"
          icon={!isResults ? BsCheck : BsEye}
        />
        <Text
          color={isActive === id ? "blue" : "grey"}
          style={{ paddingLeft: "15px" }}
        >
          {children}
        </Text>
      </div>
      {isResults && <Text style={{ marginRight: "15px" }}>{votes}</Text>}
    </div>
  );
};

export default Variant;
