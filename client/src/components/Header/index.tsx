import colours from "../../colours";
import Heading from "../Heading";
import UserIcon from "../UserIcon";
import SearchBox from "./SearchBox";

import "./index.module.css";

const Navbar = () => {
  return (
    <nav style={{ background: colours.lightGrey }}>
      <Heading>Decisioner</Heading>
      <SearchBox />
      <UserIcon />
    </nav>
  );
};

export default Navbar;
