import colours from "../../colours";
import Heading from "../Heading";
import UserIcon from "../UserIcon";
import SearchBox from "./SearchBox";

import styles from "./index.module.css";

const Header = () => {
  return (
    <header style={{ background: colours.lightGrey }}>
      <Heading>Decisioner</Heading>
      <SearchBox />
      <div className={styles.rightPart}>
        <UserIcon />
      </div>
    </header>
  );
};

export default Header;
