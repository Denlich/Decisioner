import axios, { AxiosRequestConfig } from "axios";
import Variant from "../entities/Variant";

interface AuthResponse<T> {
  token: string;
  user: T;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
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

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  getMe = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  auth = (config: AxiosRequestConfig) => {
    return axiosInstance
      .post<AuthResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  create = (params: {
    title: string;
    subtitle: string;
    variants: Variant[];
  }) => {
    return axiosInstance.post<T>(this.endpoint, params).then((res) => res.data);
  };

  update = (id: string, config: { isActive: boolean }) => {
    return axiosInstance
      .patch<T>(this.endpoint + "/" + id, config)
      .then((res) => res.data);
  };

  delete = (id: string) => {
    return axiosInstance
      .delete<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  vote = (id: string, variantId: string) => {
    return axiosInstance
      .post<T>(this.endpoint + "/" + id + "/" + variantId)
      .then((res) => res.data);
  };
}

export default APIClient;
