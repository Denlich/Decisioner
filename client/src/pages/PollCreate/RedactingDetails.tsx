import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { BsPencil, BsPlus } from "react-icons/bs";
import Text from "../../components/Text";

import styles from "./index.module.css";
import Variant from "../../entities/Variant";

interface Props {
  heading: string;
  max: number;
  current?: number;
  onClick?: () => void;
}

const RedactingDetails = ({ heading, max, current = 0, onClick }: Props) => {
  return (
    <div className={styles.row}>
      <Heading>{heading}</Heading>
      <Text color={current < max ? "grey" : "red"}>
        {current}/{max}
      </Text>
      {onClick ? (
        <Button icon={BsPlus} bg="grey" color="#0066F1" onClick={onClick} />
      ) : (
        <Button icon={BsPencil} bg="grey" color="#0066F1" />
      )}
    </div>
  );
};

export default RedactingDetails;
