import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Subheading from "../../components/GridCard/Subheading";
import { BsArrowLeft } from "react-icons/bs";

import styles from "../PollDetailsPage/index.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.row} style={{ marginBottom: "25px" }}>
      <div className={styles.right}>
        <Button
          onClick={() => navigate("/")}
          icon={BsArrowLeft}
          bg="grey"
          color="#0066F1"
        />
        <Subheading>Create Poll</Subheading>
      </div>
    </header>
  );
};

export default Header;
