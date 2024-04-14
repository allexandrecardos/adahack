import candidateRepository from '../repositories/candidate.repository';

const candidateService = {

  importCandidates: async (candidates: any) => {
    return await candidateRepository.create(candidates);
  }


};

export default candidateService;