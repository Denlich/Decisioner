import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  children: string;
  date: Date;
}

const Title = ({ children, date }: Props) => {
  let time = new Date().getTime() - new Date(date).getTime();
  time = Number((time / (24 * 60 * 60 * 1000)).toFixed(0));

  return (
    <div className={styles.textContainer}>
      <Text style={{ fontSize: "18px", marginBottom: "10px" }}>{children}</Text>
      <Text color="grey">
        {time >= 1
          ? `Crated ${time} ${time === 1 ? "day" : "days"} ago`
          : "Created recently"}
      </Text>
    </div>
  );
};

export default Title;
