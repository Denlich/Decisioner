import { FieldValues, useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button";
import Text from "../Text";
import InputBox from "./InputBox";
import authStore from "../../stores/authStore";
import APIClient from "../../services/api-client";
import User from "../../entities/User";

import styles from "./index.module.css";

const schema = z.object({
  name: z.string().min(3),
  surname: z.string().min(3),
  nickname: z.string().min(3),
  password: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

const apiClient = new APIClient<User>("/register");

const RegistrationForm = () => {
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
    }
  };

  const isAuth = authStore.getState().isAuthenticated;

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputBox
        register={register("name")}
        id="name"
        type="text"
        placeholder="Write your name"
        errors={errors}
      >
        Name
      </InputBox>
      <InputBox
        register={register("surname")}
        id="surname"
        type="text"
        placeholder="Write your surname"
        errors={errors}
      >
        Surname
      </InputBox>
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
          Register
        </Button>
      </div>
      <Text color="grey">
        Already have an account? <Link to="/login">Log in</Link>
      </Text>
    </form>
  );
};

export default RegistrationForm;
