import { Router } from "express";
import * as UserController from "../controllers/user-controller.js";
import { registerValidation } from "../validation/register-validation.js";
import { loginValidation } from "../validation/login-validation.js";
import handleValidationErrrors from "../middleware/handleValidationErrrors.js";

const router = new Router();

router.post(
  "/register",
  registerValidation,
  handleValidationErrrors,
  UserController.register
);
router.post(
  "/login",
  loginValidation,
  handleValidationErrrors,
  UserController.login
);

export default router;
