import { NavLink } from "react-router-dom";
import type { To } from "react-router-dom";
import type { IconType } from "react-icons/lib/esm/iconBase";
import { useState } from "react";

import styles from "./index.module.css";

interface Props {
  icon: IconType;
  to?: To;
  children: String;
  onClick?: () => void;
}

const NavbarItem = ({ icon: Icon, to, children, onClick }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.navbarItem} onClick={onClick}>
      <Icon size={18} color={active ? "#0066F1" : "#000"} />
      <NavLink
        to={to!}
        style={({ isActive }) => {
          isActive ? setActive(true) : setActive(false);
          return {
            color: isActive ? "#0066F1" : "#000",
          };
        }}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default NavbarItem;
