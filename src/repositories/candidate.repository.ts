import { ICandidateCreate, ICandidateFilter } from '../interface/ICandidate';
import { prisma } from '../client';

export const candidateCreateRepository = async (data: ICandidateCreate) => {
  try {
    const response = await prisma.candidatos.create({
      data: {
        nome: data.nome,
        infos_tecnicas: data.infos_tecnicas,
        etnia: data.etnia,
        idade: data.idade,
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
          { idade: { contains: data.idade } },
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
          { idade: { contains: data.idade } },
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
