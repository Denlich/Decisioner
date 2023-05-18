import styles from "./index.module.css";

interface Props {
  children: string | string[];
  color?: "grey" | "green";
}

const Subheading = ({ children, color = "green" }: Props) => {
  return <h2 className={styles.h2 + " " + styles[color]}>{children}</h2>;
};

export default Subheading;
