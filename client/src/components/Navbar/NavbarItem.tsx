import { Link } from "react-router-dom";
import type { To } from "react-router-dom";
import type { IconType } from "react-icons/lib/esm/iconBase";

interface Props {
  icon: IconType;
  to?: To;
  styles: CSSModuleClasses;
  children: String;
  onClick?: () => void;
}

const NavbarItem = ({ icon: Icon, to, styles, children, onClick }: Props) => {
  return (
    <div className={styles.navbarItem} onClick={onClick}>
      <Icon size={18} />
      <Link to={to!}>{children}</Link>
    </div>
  );
};

export default NavbarItem;
