import Subheading from "./Subheading";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  id: string;
  isActive: boolean;
}

const Header = ({ id, isActive }: Props) => {
  console.log(isActive);
  return (
    <div className={styles.row}>
      <Subheading>#{id.substring(0, 10)}</Subheading>
      {isActive ? null : <Text color="grey">Closed</Text>}
    </div>
  );
};

export default Header;
