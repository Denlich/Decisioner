import Header from "./Header";
import PollHeading from "./PollHeading";
import Text from "../../components/Text";

import styles from "./index.module.css";
import Poll from "../../components/Poll";
import Button from "../../components/Button";

const PollDetailsPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PollHeading />
      <div className={styles.subtitle}>
        <Text color="grey">123333333333333333333333333333333333333333</Text>
      </div>
      <Poll />
      <Button onClick={() => {}}>Vote</Button>
    </div>
  );
};

export default PollDetailsPage;
