import candidateService from '../services/candidate.service';

const candidateController = {

  importCandidates: async (req: any, res: any) => {
    await candidateService.importCandidates(req.body);
    res.send({ message: 'Candidates imported successfully' });
  }

};

export default candidateController;