import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Navigate } from "react-router-dom";
import { z } from "zod";
import Button from "../Button";
import Text from "../Text";
import APIClient from "../../services/api-client";

import styles from "./index.module.css";
import User from "../../entities/User";
import InputBox from "./InputBox";
import authStore from "../../stores/authStore";
import { useState } from "react";

const schema = z.object({
  nickname: z.string().min(3),
  password: z.string().min(5),
});

const apiClient = new APIClient<User>("/login");

type FormData = z.infer<typeof schema>;

const AuthorizationForm = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await apiClient.auth({ ...data });
      authStore.getState().login(response.token);
    } catch (err) {
      console.log(err);
      setError("User doesn't existe!");
    }
  };

  const isAuth = authStore.getState().isAuthenticated;

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputBox
        register={register("nickname")}
        id="nickname"
        type="text"
        placeholder="Write your nickname"
        errors={errors}
      >
        Nickname
      </InputBox>
      <InputBox
        register={register("password")}
        id="password"
        type="password"
        placeholder="Write your password"
        errors={errors}
      >
        Password
      </InputBox>
      <div>
        <Button type="submit" color="#0066F1">
          Log in
        </Button>
      </div>
      <Text color="grey">
        Don't have an account? <Link to="/registration">Registration</Link>
      </Text>
      {error && <Text color="red">{error}</Text>}
    </form>
  );
};

export default AuthorizationForm;
