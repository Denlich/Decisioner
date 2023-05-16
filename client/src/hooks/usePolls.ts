import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Poll from "../entities/Poll";

const apiClient = new APIClient<Poll>("/polls");

const usePolls = () => {
  return useQuery<Poll[]>({
    queryKey: ["polls"],
    queryFn: apiClient.getAll,
  });
};

export default usePolls;
