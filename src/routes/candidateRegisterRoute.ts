import express, { Router } from 'express';
import { candidatoController } from 'src/controllers/candidateController';

const router: Router = express.Router();

router.post('/candidatos', candidatoController.criar);

export default router;