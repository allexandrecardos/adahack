import express from 'express';
import candidateController from '../../controllers/candidate.controller';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.post('/upload',upload.single('file'), candidateController.importCandidates);

export default router;