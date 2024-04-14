import { Repository } from 'typeorm';
import { Candidato } from 'src/models/candidate';

class CandidatoRepository extends Repository<Candidato> {
    async cadastrar(candidato: Candidato): Promise<Candidato> {
        return this.save(candidato);
    }
}

export { CandidatoRepository };