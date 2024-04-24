import express from 'express';
import GameController from '../controllers/game.controller';

const router = express.Router();
const gameController = new GameController();

router.route('')
    .get(gameController.getAll)
    .post(gameController.addGame);

router.route('/:id')
    .get(gameController.getGame)
    .put(gameController.updateGame)
    .delete(gameController.deleteGame);

export default router;