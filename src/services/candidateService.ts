import { Candidato } from '../models/candidate'; 
import { CandidatoRepository } from '../repositories/candidateRepository';


class CandidatoService {
    constructor(private readonly candidatoRepository: CandidatoRepository) {}

    async execute(dadosCandidato: Candidato): Promise<Candidato> {
        return await this.candidatoRepository.cadastrar(dadosCandidato);
    }
}
const candidateRepository = new CandidatoRepository();
const candidateService = new CandidatoService(candidateRepository);


export default candidateService;