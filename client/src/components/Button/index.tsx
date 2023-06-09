import { IconType } from "react-icons/lib";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  children?: React.ReactNode;
  icon?: IconType;
  onClick?: () => void;
  bg?: "blue" | "grey" | "green" | "red" | "white";
  color?: "white" | "#0066F1" | "#666";
  type?: "button" | "submit";
}

const index = ({
  children,
  icon: Icon,
  bg = "blue",
  onClick,
  color = "white",
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      className={styles.button + " " + styles[bg]}
      onClick={onClick}
    >
      {children ? <Text color="white">{children}</Text> : null}
      {Icon ? <Icon color={color} size={18} /> : null}
    </button>
  );
};

export default index;
