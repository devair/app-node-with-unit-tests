import { AppDataSource } from "../ormconfig";
import { Request, Response } from "express";
import { User } from "../entity/User";

const userRepository = AppDataSource.getRepository(User);

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = userRepository.create({ name, email });
    await userRepository.save(user);
    res.send(user);
  }

  static async getUsers(req: Request, res: Response) {
    const users = await userRepository.find();
    res.send(users);
  }
}
