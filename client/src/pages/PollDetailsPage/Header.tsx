import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsBookmark } from "react-icons/bs";
import Button from "../../components/Button";
import Subheading from "../../components/GridCard/Subheading";

import styles from "./index.module.css";

interface Props {
  _id: string;
}

const Header = ({ _id }: Props) => {
  const navigate = useNavigate();
  return (
    <header className={styles.row}>
      <div className={styles.right}>
        <Button
          onClick={() => navigate("/")}
          icon={BsArrowLeft}
          bg="grey"
          color="#0066F1"
        />
        <Subheading>#{_id}</Subheading>
      </div>
      <Button onClick={() => {}} icon={BsBookmark} />
    </header>
  );
};

export default Header;
