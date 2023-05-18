import * as UserService from "../services/user-service.js";
import userModel from "../models/user-model.js";
import UserDto from "../dtos/UserDto.js";

export const register = async (req, res) => {
  try {
    const { name, surname, nickname, password } = req.body;
    const userData = await UserService.register(
      name,
      surname,
      nickname,
      password
    );
    return res.json({ ...userData });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const userData = await UserService.login(nickname, password);
    return res.json({ ...userData });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const userDto = new UserDto(user);

    res.json(userDto);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "no acces",
    });
  }
};
