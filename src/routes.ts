import { Router } from "express";
import { UserController } from "./controller/UserController";

const router = Router();

router.post("/users", UserController.createUser);
router.get("/users", UserController.getUsers);

export default router;
