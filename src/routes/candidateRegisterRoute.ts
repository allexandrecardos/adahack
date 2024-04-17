import express, { Router } from 'express';
import { candidatoController } from '../controllers/candidateController';

const registerRoute: Router = express.Router();

registerRoute.post('/candidatos', candidatoController.criar);

export default registerRoute;