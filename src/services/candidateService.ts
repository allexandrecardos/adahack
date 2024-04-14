import { Candidato } from 'src/models/candidate'; 
import { CandidatoRepository } from 'c:/Users/junho/Desktop/Pietra/adahack/src/repositories/candidateRepository';


class CandidatoService {
    constructor(private readonly candidatoRepository: CandidatoRepository) {}

    async execute(dadosCandidato: Candidato): Promise<Candidato> {
        return this.candidatoRepository.cadastrar(dadosCandidato);
    }
}

export default CandidatoService;