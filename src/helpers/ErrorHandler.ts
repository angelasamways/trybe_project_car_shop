import { NextFunction, Request, Response } from 'express';
import GenerateError from './GenerateError';

class ErrorHandler {
  public static handle(
    error: GenerateError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.statusCode).json({ message: error.message });
    next();
  }
}
export default ErrorHandler;