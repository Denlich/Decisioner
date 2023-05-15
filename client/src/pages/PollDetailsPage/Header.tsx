import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsBookmark } from "react-icons/bs";
import Button from "../../components/Button";

import styles from "./index.module.css";
import Subheading from "../../components/GridCard/Subheading";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.row}>
      <div className={styles.right}>
        <Button
          onClick={() => navigate("/")}
          icon={BsArrowLeft}
          bg="grey"
          color="#0066F1"
        />
        <Subheading>#123</Subheading>
      </div>
      <Button onClick={() => {}} icon={BsBookmark} />
    </header>
  );
};

export default Header;
