import express from 'express';
import candidateController from '../../controllers/candidate.controller';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/upload', upload.single('file'), candidateController.importCandidates);

export default router;