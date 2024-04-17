import { CandidateSchema } from '../validations/candidate.validator';
import { ICandidateCreate, ICandidateFilter } from '../interface/candidate.interface';
import { prisma } from '../client';
import csvParser from 'csv-parser';
import candidateRepository from '../repositories/candidate.repository';
import { Readable, Transform, Writable, pipeline } from 'stream';
import { promisify } from 'util';
import {
  candidateCreateRepository,
  getCandidateFilterRepositoryOr,
  getCandidateFilterRepositoryAnd,
} from '../repositories/candidate.repository';
// import { isEmailValid } from '../utils/isEmail';

const pipelineAsync = promisify(pipeline);

const candidateService = {
  importCandidates: async (req: any) => {
    if (!req.file) {
      throw new Error('No file uploaded');
    }
    let batch: ICandidateCreate[] = [];
    const readableFile = new Readable();
    readableFile.push(req.file.buffer);
    readableFile.push(null);
    const convertLine = new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        try {
          const candidateData: ICandidateCreate = {
            nome: chunk.nome,
            data_nascimento: chunk.data_nascimento,
            telefone: chunk.telefone,
            email: chunk.email,
            etnia: chunk.etnia,
            genero: chunk.genero,
            graduacao: chunk.graduacao,
            senioridade: chunk.senioridade,
            cidade: chunk.cidade,
            bairro: chunk.bairro,
            estado: chunk.estado,
            pcd: Boolean(chunk.pcd),
            infos_tecnicas: chunk.infos_tecnicas.split(','),
            funcionario_interno: Boolean(chunk.funcionario_interno)
          };
          callback(null, candidateData);
        } catch (error) {
          console.error('Error transforming chunk:', error);
        };
      },
    });
    const saveCsvInDB = new Writable({
      objectMode: true,
      async write(chunk, encoding, callback) {
        batch.push(chunk);
        if (batch.length >= 100) {
          await candidateRepository.createMany(batch.slice());
          batch = [];
        }
        callback();
      }
    });

    await pipelineAsync(
      readableFile,
      csvParser({ separator: ';' }),
      convertLine,
      saveCsvInDB
    );
    if (batch.length > 0) {
      await candidateRepository.createMany(batch.slice());
    }

  },
  createCandidate: async (candidate: any) => {
    return await candidateRepository.create(candidate);
  }
};

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

class CandidatoService {
  constructor(private readonly candidatoRepository: any) { }

  async execute(dadosCandidato: ICandidateCreate) {
    return await this.candidatoRepository.create(dadosCandidato);
  }
}

const candidateServiceClass = new CandidatoService(candidateRepository);

export {
  candidateServiceClass,
  candidateService
};
