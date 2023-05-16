import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Poll from "../entities/Poll";

const apiClient = new APIClient<Poll>("/polls");

const usePoll = (id: string) => {
  return useQuery({
    queryKey: ["poll", id],
    queryFn: () => apiClient.get(id),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePoll;
