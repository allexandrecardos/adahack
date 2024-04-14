import candidateService from '../services/candidate.service';

const candidateController = {

  importCandidates: async (req: any, res: any) => {
    try {
      await candidateService.importCandidates(req);
      res.send({ message: 'Candidates imported successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Error importing candidates' });
    }
  }

};

export default candidateController;