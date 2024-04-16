import express, { Request, Response } from 'express';
import { userRouter } from './user.routes';
import { auth } from '../middlewares/auth.middleware';

import { candidateCreateConrtoller, CandidateList, getCandidateFilterController } from '../controllers/candidateController';

const router = express.Router();

router.get('/get-all-candidates', CandidateList);
router.post('/create-candidate', candidateCreateConrtoller);
router.post('/filter-candidate', getCandidateFilterController);


router.use(userRouter);
router.use(auth);



export default router;