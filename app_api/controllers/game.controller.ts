import { NextFunction, Request, Response } from "express";
import Game, { IGame } from "../models/game.model";

export default class ApiCtrl {

  getAll = (req: Request, res: Response, next: NextFunction) => {
    Game.find()
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((error) => {
        res.status(400).json(error)
      })
  }

  getGame = (req: Request, res: Response, next: NextFunction) => {
    Game.findById(req.params["id"])
      .then((game: IGame | null) => {
        if (!game) {
          res.status(400).json({
            message: 'Not found'
          })
        } else {
          res.status(200).json({
            game,
            message: 'sucess'
          })
        }
      })
      .catch((error) => {
        res.status(400).json({
          message: 'error: ' + error
        })
      })
  }

  addGame = (req: Request, res: Response, next: NextFunction) => {
    const game = new Game({
      name: req.body.name,
      playtime: req.body.playtime,
      rating: req.body.rating,
      icon: req.body.icon,
      banner: req.body.banner,
      saveFile: req.body.saveFile
    });
    game.save()
      .then(() => {
        res.status(201).json(game)
      })
      .catch((error) => {
        res.status(500).json({
          message: 'error: ' + error
        })
      })
  }

  updateGame = (req: Request, res: Response, next: NextFunction) => {
    Game.findByIdAndUpdate(req.params["id"], {
      name: req.body.name,
      playtime: req.body.playtime,
      rating: req.body.rating,
      icon: req.body.icon,
      banner: req.body.banner,
      saveFile: req.body.saveFile
    })
      .then(() => {
        res.status(200).json({

        })
      })
      .catch((error) => {
        res.status(400).json({
          message: 'update error: ' + error
        })
      })
  }

  deleteGame = (req: Request, res: Response, next: NextFunction) => {
    Game.findByIdAndDelete(req.params["id"])
      .then(() => {
        res.status(200).json({})
      })
      .catch((error) => {
        res.status(400).json({
          message: 'elete error: ' + error
        })
      })
  }
}