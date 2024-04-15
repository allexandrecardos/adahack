import { Request, Response } from 'express';
import { loginService, registerService } from '../services/user.services';
import { CustomError } from '../utils/CustomError';

export const registerUser = async (req: Request, res: Response) => {
  try {
    await registerService(req.body);
    return res.status(201).json({ message: 'Usuario cadastrado com sucesso' });
  } catch (error) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const verifyLogin = async (req: Request, res: Response) => {
  try {
    const login = await loginService(req.body);
    return res.status(200).json(login);
  } catch (error: any) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
