import { Request, Response, NextFunction } from "express";
import User, { IUser } from "../models/user.model";


export default class UserController {
  register = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.uName || !req.body.passwd) {
      return res.status(400).json({ 'error': 'uName or pass missing ' })
    }

    const user = new User();
    user.uName = req.body.uName
    user.setpasswd(req.body.passwd)

    user.save()
      .then((user: IUser) => {
        const token = user.genJwt();
        res
          .status(200)
          .json({ token, user });
      })
      .catch((error) => {
        res.status(300).json({ error });
      })
  }
}