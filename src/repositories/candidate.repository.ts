import { prisma } from './../client';
import { ICandidateCreate, ICandidateFilter } from '../interface/candidate.interface';

const candidateRepository = {

  create: async (candidate: any) => {
    return await prisma.candidatos.create({ data: candidate });
  },

  createMany: async (candidate: any) => {
    return await prisma.candidatos.createMany({ data: candidate });
  },
  findOne: async (id: string) => {
    return await prisma.candidatos.findFirst({
      where: { id },
    });
  },

  findAll: async () => {
    return await prisma.candidatos.findMany();
  },

  delete: async (id: string) => {
    return await prisma.candidatos.delete({
      where: { id },
    });
  },

  update: async (candidate: any) => {
    return await prisma.candidatos.update({
      where: { id: candidate.id },
      data: candidate
    });
  }

};

export const candidateCreateRepository = async (data: ICandidateCreate) => {
  try {
    const response = await prisma.candidatos.create({
      data: {
        nome: data.nome,
        infos_tecnicas: data.infos_tecnicas,
        etnia: data.etnia,
        data_nascimento: data.data_nascimento,
        telefone: data.telefone,
        email: data.email,
        estado: data.estado,
        cidade: data.cidade,
        bairro: data.bairro,
        graduacao: data.graduacao,
        senioridade: data.senioridade,
        funcionario_interno: data.funcionario_interno,
        pcd: data.pcd,
        genero: data.genero,
      },
    });

    return response;
  } catch (error: any) {
    console.error(error);
    return { error: 'Failed to create candidate', message: error.message };
  }
};

export const getCandidateFilterRepositoryOr = async (data: ICandidateFilter) => {
  try {
    const response = await prisma.candidatos.findMany({
      where: {
        OR: [
          { nome: { contains: data.nome, mode: 'insensitive' } },
          { infos_tecnicas: { hasSome: data.infos_tecnicas } },
          { etnia: { contains: data.etnia, mode: 'insensitive' } },
          { data_nascimento: { contains: data.data_nascimento } },
          { telefone: { contains: data.telefone } },
          { email: { contains: data.email } },
          { estado: { contains: data.estado } },
          { cidade: { contains: data.cidade } },
          { bairro: { contains: data.bairro } },
          { graduacao: { contains: data.graduacao } },
          { senioridade: { contains: data.senioridade } },
          { funcionario_interno: { equals: data.funcionario_interno } },
          { pcd: { equals: data.pcd } },
          { genero: { contains: data.genero } },
        ],
      },
    });

    return response;
  } catch (error: any) {
    console.error(error);
    return { error: 'Failed to filter candidate', message: error.message };
  }
};

export const getCandidateFilterRepositoryAnd = async (data: ICandidateFilter) => {
  try {
    const response = await prisma.candidatos.findMany({
      where: {
        AND: [
          { nome: { contains: data.nome, mode: 'insensitive' } },
          { infos_tecnicas: { hasSome: data.infos_tecnicas } },
          { etnia: { contains: data.etnia, mode: 'insensitive' } },
          { data_nascimento: { contains: data.data_nascimento } },
          { telefone: { contains: data.telefone } },
          { email: { contains: data.email } },
          { estado: { contains: data.estado } },
          { cidade: { contains: data.cidade } },
          { bairro: { contains: data.bairro } },
          { graduacao: { contains: data.graduacao } },
          { senioridade: { contains: data.senioridade } },
          { funcionario_interno: { equals: data.funcionario_interno } },
          { pcd: { equals: data.pcd } },
          { genero: { contains: data.genero } },
        ],
      },
    });

    return response;
  } catch (error: any) {
    console.error(error);
    return { error: 'Failed to filter candidate', message: error.message };
  }
};

export default candidateRepository;
