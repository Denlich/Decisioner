import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import PollHeading from "./PollHeading";
import Text from "../../components/Text";
import Poll from "../../components/Poll";
import Button from "../../components/Button";
import usePoll from "../../hooks/usePoll";
import APIClient from "../../services/api-client";
import Variant from "../../entities/Variant";

import styles from "./index.module.css";
import useGetMe from "../../hooks/useGetMe";

const apiClient = new APIClient<Variant>("/polls");

const PollDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = usePoll(id!);
  const { data: user } = useGetMe();
  const isOwner = user?._id === data?.user._id;
  const [isActive, setActive] = useState("");
  const [submitError, setError] = useState("");

  const handleClick = (id: string) => {
    setActive(id);
  };

  const handleSubmit = async (id: string, variantId: string) => {
    try {
      if (isActive) {
        await apiClient
          .vote(id, variantId)
          .then(() => window.location.reload());
      } else throw new Error("Choose variant");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

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
      {!data.voted_users.includes(user?._id!) && data.isActive ? (
        <>
          <Poll
            isActive={isActive!}
            handleClick={handleClick}
            variants={data.variants}
          />
          <Button onClick={() => handleSubmit(id!, isActive)}>Vote</Button>
        </>
      ) : (
        <Poll variants={data.variants} isResults={true} results={data.votes} />
      )}
      {submitError && <Text color="red">{submitError}</Text>}
    </div>
  );
};

export default PollDetailsPage;
