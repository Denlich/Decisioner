import NavbarItem from "./NavbarItem";
import {
  MdOutlineHome,
  MdOutlineInventory2,
  MdOutlineBookmarkBorder,
  MdOutlinePerson,
  MdOutlineLogout,
} from "react-icons/md";

import styles from "./index.module.css";
import authStore from "../../stores/authStore";

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
        <NavbarItem
          styles={styles}
          icon={MdOutlineLogout}
          onClick={() => authStore.getState().logout()}
        >
          Sign out
        </NavbarItem>
      </li>
    </ul>
  );
};

export default index;
