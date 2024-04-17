import { prisma } from '../client';
import { Candidato } from '../models/candidate';

class CandidatoRepository  {
    async cadastrar(candidato: Candidato): Promise<Candidato> {
        console.log(candidato);
        return await prisma.candidatos.create({data: candidato});
    }
}

export { CandidatoRepository };