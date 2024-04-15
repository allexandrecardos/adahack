import { Request, Response } from 'express';
import { prisma } from '../client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.users.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: 'Usuario cadastrado com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const verifyLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '8h' });
      res.json({ message: 'Login efetuado com sucesso', token });
    } else {
      res.status(401).json({ message: 'Email ou senha inválidos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};


