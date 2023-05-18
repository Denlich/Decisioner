import Heading from "../../components/Heading";
import Text from "../../components/Text";
import userImg from "../../assets/I_end.png";

import styles from "./index.module.css";
import useGetMe from "../../hooks/useGetMe";

const index = () => {
  const { data } = useGetMe();

  return (
    <div className={styles.container}>
      <img className={styles.user} src={userImg} />
      <div className={styles.info}>
        <Heading>
          {data?.name} {data?.surname}
        </Heading>
        <Text color="grey">@{data?.nickname}</Text>
      </div>
    </div>
  );
};

export default index;
