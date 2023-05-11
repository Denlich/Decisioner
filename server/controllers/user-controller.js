import * as UserService from "../services/user-service.js";

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
