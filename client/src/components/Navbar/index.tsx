import NavbarItem from "./NavbarItem";
import {
  MdOutlineHome,
  MdOutlinePerson,
  MdOutlineLogout,
} from "react-icons/md";
import authStore from "../../stores/authStore";

const index = () => {
  return (
    <ul>
      <li>
        <NavbarItem icon={MdOutlineHome} to="/">
          All polls
        </NavbarItem>
      </li>
      <li>
        <NavbarItem icon={MdOutlinePerson} to="/profile">
          Profile
        </NavbarItem>
      </li>
      <li>
        <NavbarItem
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
