import User from "../entities/User";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<User>("/me");

const useGetMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => apiClient.getMe(),
  });
};

export default useGetMe;
