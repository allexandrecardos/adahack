import express from 'express';
import candidateController from '../../controllers/candidate.controller';

const router = express.Router();

router.get('/upload', candidateController.importCandidates);

export default router;