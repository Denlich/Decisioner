import { Router } from "express";
import { UserController, PollController } from "../controllers/index.js";
import {
  registerValidation,
  loginValidation,
  pollValidation,
} from "../validation/index.js";
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
router.get("/polls/:id", PollController.getOne);
router.post("/polls", checkAuth, pollValidation, PollController.createPoll);
router.post("/polls/:id/:variant", checkAuth, PollController.vote);
router.delete("/polls/:id", checkAuth, PollController.remove);

export default router;
