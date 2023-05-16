import Heading from "../../components/Heading";
import StyledInfo from "../../components/StyledInfo";
import { BsClock, BsPerson, BsEye } from "react-icons/bs";

import styles from "./index.module.css";
import Time from "../../components/Time";

interface Props {
  title: string;
  date: Date;
  user: string;
  viewsCount: number;
}

const PollHeading = ({ title, date, user, viewsCount }: Props) => {
  return (
    <div className={styles.heading}>
      <Heading>{title}</Heading>
      <div className={styles.flex}>
        <StyledInfo icon={BsClock}>
          <Time date={date} />
        </StyledInfo>
        <StyledInfo icon={BsPerson}>Denlich</StyledInfo>
        <StyledInfo icon={BsEye}>21</StyledInfo>
      </div>
    </div>
  );
};

export default PollHeading;
