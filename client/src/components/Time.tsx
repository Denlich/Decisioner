import Text from "./Text";

interface Props {
  date: Date;
}

const Time = ({ date }: Props) => {
  let time = new Date().getTime() - new Date(date).getTime();
  time = Number((time / (24 * 60 * 60 * 1000)).toFixed(0));

  return (
    <Text color="grey">
      {time >= 1
        ? `Crated ${time} ${time === 1 ? "day" : "days"} ago`
        : "Created recently"}
    </Text>
  );
};

export default Time;
