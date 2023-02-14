import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).createCarController());

routes.get('/cars', (req, res, next) => new CarController(req, res, next).findCarsController());

routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next)
  .findCarByIdController());

export default routes;
