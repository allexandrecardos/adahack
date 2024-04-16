import express, { Request, Response } from 'express';

import { candidateCreateConrtoller, CandidateList, getCandidateFilterController } from '../controllers/CandidateController';

const router = express.Router();

router.get('/get-all-candidates', CandidateList);
router.post('/create-candidate', candidateCreateConrtoller);
router.post('/filter-candidate', getCandidateFilterController);

export default router;