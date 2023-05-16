import axios from "axios";
import { FieldValues } from "react-hook-form";

interface AuthResponse<T> {
  token: string;
  user: T;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
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

  login = (params: FieldValues) => {
    return axiosInstance
      .post<AuthResponse<T>>(this.endpoint, params)
      .then((res) => res.data);
  };
}

export default APIClient;
