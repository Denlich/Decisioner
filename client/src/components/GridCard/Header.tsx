import Subheading from "./Subheading";
import styles from "./index.module.css";

interface Props {
  id: string;
}

const Header = ({ id }: Props) => {
  return (
    <div className={styles.row}>
      <Subheading>{id.substring(0, 10)}</Subheading>
    </div>
  );
};

export default Header;
