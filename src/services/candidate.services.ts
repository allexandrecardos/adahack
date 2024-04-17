import { CandidateSchema } from '../validations/CandidateValidator';
import { ICandidateCreate, ICandidateFilter } from '../interface/ICandidate';
import { prisma } from '../client';
import {
  candidateCreateRepository,
  getCandidateFilterRepositoryOr,
  getCandidateFilterRepositoryAnd,
} from '../repositories/candidate.repository';
// import { isEmailValid } from '../utils/isEmail';

export const candidateCreateService = async (data: ICandidateCreate) => {
  try {
    // if(isEmailValid(data.email)) {
    //   throw new Error('Email is not valid');
    // }

    const candidateExists = await prisma.candidatos.findFirst({
      where: {
        OR: [{ email: { equals: data.email } }, { telefone: { equals: data.telefone } }],
      },
    });

    if (candidateExists) {
      return { error: 'Candidate already exists' };
    }

    await CandidateSchema.validate(data, {
      abortEarly: false,
    });

    const response = await candidateCreateRepository(data);
    return response;
  } catch (error: any) {
    console.error(error);
    return { error: 'Failed to create candidate', message: error.message };
  }
};

export const getCandidateFilterServicesOr = async (data: ICandidateFilter) => {
  try {
    const response = await getCandidateFilterRepositoryOr(data);
    return response;
  } catch (error: any) {
    console.error(error);
    return { error: 'Failed to filter candidate', message: error.message };
  }
};

export const getCandidateFilterServicesAnd = async (data: ICandidateFilter) => {
  try {
    const response = await getCandidateFilterRepositoryAnd(data);
    return response;
  } catch (error: any) {
    console.error(error);
    return { error: 'Failed to filter candidate', message: error.message };
  }
};
