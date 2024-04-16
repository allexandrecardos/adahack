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

export const getCandidateFilterRepository = async (data: ICandidateFilter) => {
  try {
    const response = await prisma.candidatos.findMany({
      where: {
        OR: [
          { nome: { equals: data.nome } },
          { infos_tecnicas: { hasSome: data.infos_tecnicas } },
          { etnia: { equals: data.etnia } },
          { idade: { equals: data.idade } },
          { telefone: { equals: data.telefone } },
          { email: { equals: data.email } },
          { estado: { equals: data.estado } },
          { cidade: { equals: data.cidade } },
          { bairro: { equals: data.bairro } },
          { graduacao: { equals: data.graduacao } },
          { senioridade: { equals: data.senioridade } },
          { funcionario_interno: { equals: data.funcionario_interno } },
          { pcd: { equals: data.pcd } },
          { genero: { equals: data.genero } },
        ],
      },
    });

    return response;
  } catch (error: any) {
    console.error(error);
    return { error: 'Failed to filter candidate', message: error.message };
  }
};
