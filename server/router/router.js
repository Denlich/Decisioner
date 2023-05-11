import { Router } from "express";
import { UserController, PollController } from "../controllers/index.js";
import { registerValidation, loginValidation } from "../validation/index.js";
import checkAuth from "../middleware/checkAuth.js";
import handleValidationErrors from "../middleware/handleValidationErrors.js";

const router = new Router();

router.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);

router.get("/polls", PollController.getAll);
router.post("/polls", checkAuth, PollController.createPoll);

export default router;
