import express from 'express';
import candidateRouter from './candidates/candidate.router';

const router = express.Router();

router.use('/candidates', candidateRouter);

export default router;