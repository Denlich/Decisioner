import Heading from "../../components/Heading";
import StyledInfo from "../../components/StyledInfo";
import { BsClock, BsPerson, BsEye } from "react-icons/bs";

import styles from "./index.module.css";

const PollHeading = () => {
  return (
    <div className={styles.heading}>
      <Heading>Poll heading</Heading>
      <div className={styles.flex}>
        <StyledInfo icon={BsClock}>Created 2 days ago</StyledInfo>
        <StyledInfo icon={BsPerson}>Denlich</StyledInfo>
        <StyledInfo icon={BsEye}>21</StyledInfo>
      </div>
    </div>
  );
};

export default PollHeading;
