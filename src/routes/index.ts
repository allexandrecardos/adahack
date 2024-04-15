import express, { Request, Response } from 'express';
import { userRouter } from './user.routes';
import { auth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

router.use(userRouter);
router.use(auth);

router.get('/teste', (req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

export default router;