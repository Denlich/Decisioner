import styles from "./index.module.css";

interface Props {
  children: string;
}

const Subheading = ({ children }: Props) => {
  return <h2 className={styles.h2}>{children}</h2>;
};

export default Subheading;
