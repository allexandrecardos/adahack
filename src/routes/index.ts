import express, { Request, Response } from 'express';
import  registerRoute  from '../routes/candidateRegisterRoute';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

router.use(registerRoute);

export default router;