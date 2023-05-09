import bcrypt from "bcrypt";

import userModel from "../models/user-model.js";
import { generateToken } from "./token-service.js";
import UserDto from "../dtos/UserDto.js";

export const register = async (name, surname, nickname, password) => {
  const candidate = await userModel.findOne({ nickname });
  if (candidate) {
    throw new Error(`User with nickname ${nickname} already exists`);
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = userModel.create({
    name: name,
    surname: surname,
    nickname: nickname,
    password: hashPassword,
  });

  const userDto = new UserDto(user);
  const token = generateToken({ ...userDto });

  return { token, user: userDto };
};

export const login = async (nickname, password) => {
  const user = await userModel.findOne({ nickname });
  if (!user) {
    throw new Error("User doesn't existe");
  }

  const isValidPass = await bcrypt.compare(password, user.password);
  if (!isValidPass) {
    throw new Error("Password incorrect");
  }

  const userDto = new UserDto(user);
  const token = generateToken({ ...userDto });
  return { token, user: userDto };
};
