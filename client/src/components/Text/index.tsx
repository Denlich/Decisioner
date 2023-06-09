import styles from "./index.module.css";

interface Props {
  color?: "black" | "white" | "grey" | "blue" | "red";
  children: any;
  style?: React.CSSProperties;
}

const index = ({ children, color = "black", style }: Props) => {
  return (
    <p className={styles.text + " " + styles[color]} style={style}>
      {children}
    </p>
  );
};

export default index;
