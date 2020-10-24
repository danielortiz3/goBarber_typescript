import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authconfig from '@config/auth';

import AppError from '@shared/errors/AppError';

interface ITokenPaylod {
  iat: number;
  exp: number;
  sub: string;
}

export default function unsureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing.', 401);
  }

  const [, token] = authHeader.split(' ');
  const { secret } = authconfig.jwt;

  try {
    const decoded = verify(token, secret);

    const { sub } = decoded as TokenPaylod;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT token', 401);
  }
}
