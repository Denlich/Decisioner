import styles from "./index.module.css";

interface Props {
  children: String;
}

const index = ({ children }: Props) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default index;