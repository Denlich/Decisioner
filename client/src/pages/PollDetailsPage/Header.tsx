import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsBookmark, BsTrash } from "react-icons/bs";
import Button from "../../components/Button";
import Subheading from "../../components/GridCard/Subheading";

import styles from "./index.module.css";
import APIClient from "../../services/api-client";
import Poll from "../../entities/Poll";
import { useState } from "react";

interface Props {
  _id: string;
  isActive: boolean;
  isOwner: boolean;
}

const apiClient = new APIClient<Poll>("/polls");

const Header = ({ _id, isOwner }: Props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  const handleUpdatePoll = () => {
    const updateActive = !active;
    apiClient
      .update(_id, { isActive: updateActive })
      .then(() => setActive(updateActive))
      .catch((err) => console.log(err.message));
  };

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
      {isOwner ? (
        <div className={styles.row}>
          <div className={styles.mr10}>
            <Button onClick={handleUpdatePoll}>
              {active ? "Close poll" : "Open"}
            </Button>
          </div>
          <Button onClick={() => {}} icon={BsTrash} bg="red" />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
