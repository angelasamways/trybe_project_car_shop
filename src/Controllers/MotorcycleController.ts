import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motorcycleService: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcycleService = new MotorcycleService();
  }

  async creating() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMoto = await this.motorcycleService.creating(moto);
      return this.res.status(201).json(newMoto);
    } catch (err) {
      this.next(err);
    }
  }

  async getAll() {
    try {
      const motos = await this.motorcycleService.getAll();
      return this.res.status(200).json(motos);
    } catch (err) {
      this.next(err);
    }
  }

  async getById() {
    try {
      const { id } = this.req.params;
      const moto = await this.motorcycleService.getById(id);
      return this.res.status(200).json(moto);
    } catch (err) {
      this.next(err);
    }
  }
}
