import axios from "axios";
import { FieldValues } from "react-hook-form";
import Variant from "../entities/Variant";

interface AuthResponse<T> {
  token: string;
  user: T;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  get = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  auth = (params: FieldValues) => {
    return axiosInstance
      .post<AuthResponse<T>>(this.endpoint, params)
      .then((res) => res.data);
  };

  create = (params: {
    title: string;
    subtitle: string;
    variants: Variant[];
  }) => {
    return axiosInstance.post<T>(this.endpoint, params).then((res) => res.data);
  };
}

export default APIClient;
