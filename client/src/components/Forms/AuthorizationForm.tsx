import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import Button from "../Button";
import Text from "../Text";
import APIClient from "../../services/api-client";

import styles from "./index.module.css";
import User from "../../entities/User";
import tokenStore from "../../stores/tokenStore";

const schema = z.object({
  nickname: z.string().min(3),
  password: z.string().min(5),
});

const apiClient = new APIClient<User>("/login");

type FormData = z.infer<typeof schema>;

const AuthorizationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await apiClient.login(data);
      tokenStore.getState().setToken(response.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBox}>
        <Text>Nickname:</Text>
        <input
          {...register("nickname")}
          id="nickname"
          type="text"
          placeholder="Write nickname"
        />
        {errors.nickname && <Text color="red">{errors.nickname.message}</Text>}
      </div>
      <div className={styles.inputBox}>
        <Text>Password:</Text>
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Write password"
        />
        {errors.password && <Text color="red">{errors.password.message}</Text>}
      </div>
      <div>
        <Button color="#0066F1">Увійти</Button>
      </div>
      <Text color="grey">
        Ще немає аккаунту? <Link to="/registration">Реєстрація</Link>
      </Text>
    </form>
  );
};

export default AuthorizationForm;
