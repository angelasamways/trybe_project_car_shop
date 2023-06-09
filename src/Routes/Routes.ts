import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).creating());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateById());
routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).creating(),
);
routes.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).getAll());
routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);
routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

export default routes;