import express, { Request, Response } from 'express';
import { userRouter } from './user.routes';
import { auth } from '../middlewares/auth.middleware';

import {
  candidateCreateConrtoller,
  CandidateList,
  getCandidateFilterControllerOr,
  getCandidateFilterControllerAnd,
} from '../controllers/candidate.controller';

const router = express.Router();

router.get('/get-all-candidates', CandidateList);
router.post('/create-candidate', candidateCreateConrtoller);
router.post('/filter-or-candidate', getCandidateFilterControllerOr);
router.post('/filter-and-candidate', getCandidateFilterControllerAnd);

router.use(userRouter);
router.use(auth);

export default router;
