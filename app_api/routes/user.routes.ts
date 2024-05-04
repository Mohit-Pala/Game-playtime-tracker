import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();
const authCtrl = new UserController();

router.route('/:uName')
    .get(authCtrl.getUser);

router.route('/login')
    .post(authCtrl.login);

router.route('/register')
    .post(authCtrl.register);

export default router;