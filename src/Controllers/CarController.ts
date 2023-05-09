import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carService: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }

  async creating() {
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.carService.creating(car);
      return this.res.status(201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }

  async getAll() {
    try {
      const cars = await this.carService.getAll();
      return this.res.status(200).json(cars);
    } catch (err) {
      this.next(err);
    }
  }

  async getById() {
    try {
      const { id } = this.req.params;
      const car = await this.carService.getById(id);
      return this.res.status(200).json(car);
    } catch (err) {
      this.next(err);
    }
  }

  async updateById() {
    const { id } = this.req.params;
    const carToUpdate = this.req.body;
    try {
      const carUpdated = await this.carService.updateById(id, carToUpdate);
      return this.res.status(200).json(carUpdated);
    } catch (error) {
      this.next(error);
    }  
  }
}
