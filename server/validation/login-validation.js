import { body } from "express-validator";

export const loginValidation = [
  body("nickname", "Nickname must be at least 3 characters and no more than 20")
    .isString()
    .isLength({ min: 3, max: 20 }),
  body("password", "Password must be at least 5 characters long")
    .isString()
    .isLength({ min: 5 }),
];
