import { prisma } from '../client';

export const registerRepository = async (email: any, hashedPassword: any) => {
  await prisma.users.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });
};

export const loginRepository = async (email: any) => {
  const user = await prisma.users.findUnique({
    where: { email },
  });

  return user;
};
