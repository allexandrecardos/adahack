import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginRepository, registerRepository } from '../repositories/user.repository';
import { CustomError } from '../utils/CustomError';

export const registerService = async (data: any) => {
  const { email, password } = data;

  const hashedPassword = await bcrypt.hash(password, 10);
  await registerRepository(email, hashedPassword);
};

export const loginService = async (data: any) => {
  const { email, password } = data;

  const user = await loginRepository(email);

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '8h' });

    return token;
  } else {
    throw new CustomError('Email ou senha inválidos', 401);
  }
};
