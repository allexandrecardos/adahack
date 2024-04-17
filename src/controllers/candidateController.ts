import { Request, Response } from 'express';
import CandidatoService from '../services/candidateService';
import { ICandidateCreate } from '../interface/ICandidate';


const candidatoController = {
  async criar(req: Request, res: Response) {
      try {
          const candidato: ICandidateCreate = req.body;
          const novoCandidato = await CandidatoService.execute(candidato); 
          
          res.status(201).send(novoCandidato);
      } catch (error) {
         console.log(error);
        res.status(500).send({ message: 'Erro ao criar candidato' });
      }
  }
};

export { candidatoController };