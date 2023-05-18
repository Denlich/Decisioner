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
  results?: number;
}

const Variant = ({
  children,
  isActive,
  setActive,
  id,
  votes,
  isResults = false,
  results,
}: Props) => {
  const percent = Number(((votes! * 100) / results!).toFixed(0));
  const gradientStyle = {
    background: `linear-gradient(to right, rgba(0, 199, 146, 0.2) 0%, rgba(0, 199, 146, 0.2) ${percent}%, #F5F8FB ${percent}% ,#F5F8FB ${
      100 - percent
    }%)`,
  };

  return (
    <div
      className={styles.variant}
      style={percent > 0 ? gradientStyle : { backgroundColor: "#F5F8FB" }}
    >
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
      {isResults && <Text style={{ marginRight: "15px" }}>{percent} %</Text>}
    </div>
  );
};

export default Variant;
