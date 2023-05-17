import Header from "./Header";
import PollHeading from "./PollHeading";
import Text from "../../components/Text";
import Poll from "../../components/Poll";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import usePoll from "../../hooks/usePoll";
import jwtDecode from "jwt-decode";

import styles from "./index.module.css";
import { useEffect, useState } from "react";

const PollDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = usePoll(id!);
  const [isOwner, setOwner] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: { _id: string } = jwtDecode(token);
      setOwner(decodedToken._id === data?.user._id);
    }
  }, [data]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error || !data) throw error;

  return (
    <div className={styles.container}>
      <Header _id={data._id} isActive={data.isActive} isOwner={isOwner} />
      <PollHeading
        title={data.title}
        date={data.createdAt}
        user={data.user.nickname}
        viewsCount={data.viewsCount}
      />
      <div className={styles.subtitle}>
        <Text color="grey">{data.subtitle}</Text>
      </div>
      <Poll variants={data.variants} />
      <Button onClick={() => {}}>Vote</Button>
    </div>
  );
};

export default PollDetailsPage;
