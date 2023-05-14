import { useEffect, useState } from "react";
import Poll from "../../entities/Poll";
import APIClient from "../../services/api-client";
import styles from "./index.module.css";
import GridCard from "../../components/GridCard";

const apiClient = new APIClient<Poll>("/polls");

const index = () => {
  const [polls, setPolls] = useState<Poll[]>([]);

  useEffect(() => {
    const fetchPolls = async () => {
      const data = await apiClient.getAll();
      setPolls(data);
    };
    fetchPolls();
  }, []);

  return (
    <div className={styles.grid}>
      {polls.map((poll, index) => (
        <GridCard key={index} poll={poll} />
      ))}
    </div>
  );
};

export default index;
