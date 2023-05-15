import styles from "./index.module.css";
import GridCard from "../../components/GridCard";
import usePolls from "../../hooks/usePolls";

const index = () => {
  const { data } = usePolls();

  return (
    <div className={styles.grid}>
      {data?.map((poll, index) => (
        <GridCard key={index} poll={poll} />
      ))}
    </div>
  );
};

export default index;
