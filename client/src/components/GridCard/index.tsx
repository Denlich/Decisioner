import Poll from "../../entities/Poll";
import Header from "./Header";
import Text from "../Text";

import styles from "./index.module.css";
import Title from "./Title";

interface Props {
  poll: Poll;
}

const index = ({ poll }: Props) => {
  return (
    <div className={styles.container}>
      <Header id={poll._id} />
      <Title>{poll.title}</Title>
      <Text color="grey">{poll.subtitle}</Text>
      <footer>
        <Text>Some user</Text>
      </footer>
    </div>
  );
};

export default index;
