import { Request, Response, NextFunction } from "express";
import User, { IUser } from "../models/user.model";
import passport from 'passport';

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

  login = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.uName || !req.body.password) {
      return res
        .status(400)
        .json({ "message": "Uname or pass missing" });
    }

    passport.authenticate('local', (error: any, user: any, info: any) => {
      if (user) {
        const token = user.generateJwt();
        res
          .status(200)
          .json({ token, user });
      } else {
        res
          .status(401)
          .json({ error });
      }
    })(req, res);
  }

  getUser(req: Request, res: Response, next: NextFunction) {
    User.findOne({ email: req.params.uName })
      .then((user) => {
        if (user) {
          res
            .status(200)
            .json({ user });
        } else {
          res
            .status(404)
            .json({ message: "no user found" })
        }
      })
      .catch((error) => {
        res
          .status(404)
          .json({ message: "error retrieving user", error })
      })
  }
}