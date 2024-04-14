import candidateRepository from '../repositories/candidate.repository';

const candidateService = {

  importCandidates: async (req: any) => {

    if (!req.file) {
      throw new Error('No file uploaded');
    }



    await candidateService.createCandidate(req.file);
  },

  createCandidate: async (candidate: any) => {
    return await candidateRepository.create(candidate);
  }


};

export default candidateService;