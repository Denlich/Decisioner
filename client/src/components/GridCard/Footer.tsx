import { BsPerson, BsEye } from "react-icons/bs";

import styles from "./index.module.css";
import StyledInfo from "../StyledInfo";

interface Props {
  nickname: string;
  viewsCount: number;
}

const Footer = ({ nickname, viewsCount }: Props) => {
  return (
    <footer className={styles.footer}>
      <StyledInfo icon={BsPerson} text={nickname} />
      <StyledInfo icon={BsEye} text={viewsCount} />
    </footer>
  );
};

export default Footer;
