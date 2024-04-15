import express, { Request, Response } from 'express';
import { userRouter } from './user.routes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

router.use(userRouter);

export default router;