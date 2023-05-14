import styles from "./index.module.css";

interface Props {
  color?: "black" | "white" | "grey";
  children: string;
}

const index = ({ children, color = "black" }: Props) => {
  return <p className={styles.text + " " + styles[color]}>{children}</p>;
};

export default index;
