import { Link } from "react-router-dom";
import Poll from "../../entities/Poll";
import Header from "./Header";
import Title from "./Title";
import Text from "../Text";
import Footer from "./Footer";

import styles from "./index.module.css";

interface Props {
  poll: Poll;
}

const index = ({ poll }: Props) => {
  return (
    <div className={styles.container}>
      <Link to={`/polls/${poll._id}`}>
        <Header id={poll._id} isActive={poll.isActive} />
      </Link>
      <Title date={poll.createdAt}>{poll.title}</Title>
      <Text color="grey" style={{ wordBreak: "break-all" }}>
        {poll.subtitle}
      </Text>
      <Footer nickname={poll.user.nickname} viewsCount={poll.viewsCount} />
    </div>
  );
};

export default index;
