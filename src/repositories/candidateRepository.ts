import { ICandidateCreate } from '../interface/ICandidate';
import { prisma } from '../client';

class CandidatoRepository  {
    async cadastrar(candidato: ICandidateCreate) {
        return await prisma.candidatos.create({data: candidato});
    }
}

export { CandidatoRepository };