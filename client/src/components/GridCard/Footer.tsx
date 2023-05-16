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
      <StyledInfo icon={BsPerson}>{nickname}</StyledInfo>
      <StyledInfo icon={BsEye}>{viewsCount}</StyledInfo>
    </footer>
  );
};

export default Footer;
