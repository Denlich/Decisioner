import NavbarItem from "./NavbarItem";
import {
  MdOutlineHome,
  MdOutlineInventory2,
  MdOutlineBookmarkBorder,
  MdOutlinePerson,
  MdOutlineLogout,
} from "react-icons/md";
import Button from "../Button";

import styles from "./index.module.css";

const handleClick = () => {
  alert("Hello world!");
};

const index = () => {
  return (
    <ul>
      <li>
        <NavbarItem styles={styles} icon={MdOutlineHome} to="/">
          All polls
        </NavbarItem>
      </li>
      <li>
        <NavbarItem styles={styles} icon={MdOutlineInventory2} to="/">
          My polls
        </NavbarItem>
      </li>
      <li>
        <NavbarItem styles={styles} icon={MdOutlineBookmarkBorder} to="/">
          Saved
        </NavbarItem>
      </li>
      <li>
        <NavbarItem styles={styles} icon={MdOutlinePerson} to="/">
          Profile
        </NavbarItem>
      </li>
      <li>
        <NavbarItem styles={styles} icon={MdOutlineLogout} to="/">
          Sign out
        </NavbarItem>
      </li>
    </ul>
  );
};

export default index;
