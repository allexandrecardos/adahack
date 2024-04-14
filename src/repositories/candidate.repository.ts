import { prisma } from './../client';

const candidateRepository = {

  create: async (candidate: any) => {
    return await prisma.candidatos.create({ data: candidate });
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

export default candidateRepository;