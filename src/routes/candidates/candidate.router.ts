import express from 'express';
import candidateController from '../../controllers/candidate.controller';
import multer from 'multer';
import {
  candidateCreateConrtoller,
  CandidateList,
  getCandidateFilterControllerOr,
  getCandidateFilterControllerAnd,
} from '../../controllers/candidate.controller';

const router = express.Router();
const upload = multer();

router.post('/upload', upload.single('file'), candidateController.importCandidates);

router.get('/', CandidateList);
router.post('/', candidateCreateConrtoller);
router.post('/filter-or', getCandidateFilterControllerOr);
router.post('/filter-and', getCandidateFilterControllerAnd);

export default router;