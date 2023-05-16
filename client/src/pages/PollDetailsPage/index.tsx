import Header from "./Header";
import PollHeading from "./PollHeading";
import Text from "../../components/Text";
import Poll from "../../components/Poll";
import Button from "../../components/Button";
import { Navigate, useParams } from "react-router-dom";

import styles from "./index.module.css";
import usePoll from "../../hooks/usePoll";

const PollDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, error } = usePoll(id!);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error || !data) throw error;

  return (
    <div className={styles.container}>
      <Header _id={data._id} />
      <PollHeading
        title={data.title}
        date={data.createdAt}
        user={data.user.nickname}
        viewsCount={data.viewsCount}
      />
      <div className={styles.subtitle}>
        <Text color="grey">123333333333333333333333333333333333333333</Text>
      </div>
      <Poll variants={data.variants} />
      <Button onClick={() => {}}>Vote</Button>
    </div>
  );
};

export default PollDetailsPage;
