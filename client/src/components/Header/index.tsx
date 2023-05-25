import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import Heading from "../Heading";
import UserIcon from "../UserIcon";
import SearchBox from "./SearchBox";

import styles from "./index.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <Heading>
        <Link to="/">Decisioner</Link>
      </Heading>
      <SearchBox />
      <div className={styles.rightPart}>
        <div className={styles.mr15}>
          <Button bg="green" onClick={() => navigate("/polls/create")}>
            Create poll
          </Button>
        </div>
        <UserIcon />
      </div>
    </header>
  );
};

export default Header;
