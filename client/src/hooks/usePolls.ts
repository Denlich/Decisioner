import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Poll from "../entities/Poll";
import usePollQueryStore from "../stores/pollQueryStore";

const apiClient = new APIClient<Poll>("/polls");

const usePolls = () => {
  const pollQuery = usePollQueryStore((s) => s.pollQuery);
  return useQuery<Poll[]>({
    queryKey: ["polls", pollQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          search: pollQuery.searchText,
        },
      }),
  });
};

export default usePolls;
