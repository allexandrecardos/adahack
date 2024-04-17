import candidateRouter from './candidates/candidate.router';
import express from 'express';
import { userRouter } from './user.routes';
import { auth } from '../middlewares/auth.middleware';
import {
  candidateCreateConrtoller,
  CandidateList,
  getCandidateFilterControllerOr,
  getCandidateFilterControllerAnd,
} from '../controllers/candidate.controller';

const router = express.Router();

router.use(userRouter);

// router.use(auth);

router.use('/candidates', candidateRouter);

router.get('/get-all-candidates', CandidateList);
router.post('/create-candidate', candidateCreateConrtoller);
router.post('/filter-or-candidate', getCandidateFilterControllerOr);
router.post('/filter-and-candidate', getCandidateFilterControllerAnd);

export default router;
