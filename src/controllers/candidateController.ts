import { Request, Response } from 'express';
import { Candidato } from '../models/candidate';
import CandidatoService from '../services/candidateService';


const candidatoController = {
  async criar(req: Request, res: Response) {
      try {
          const candidato: Candidato = req.body;
          const novoCandidato = await CandidatoService.execute(candidato); 
          
          res.status(201).send(novoCandidato);
      } catch (error) {
         console.log(error);
        res.status(500).send({ message: 'Erro ao criar candidato' });
      }
  }
};

export { candidatoController };