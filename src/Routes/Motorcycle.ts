import { Router } from 'express';
// import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/motorcycles', 
  (req, res, next) => new MotorcycleController(req, res, next).createMotorcycleController(),
);

routes.get(
  '/motorcycles', 
  (req, res, next) => new MotorcycleController(req, res, next).findMotorcyclesController(),
);

routes.get('/motorcycles/:id', (req, res, next) => new MotorcycleController(req, res, next)
  .findMotorcycleByIdController());

routes.put('/motorcycles/:id', (req, res, next) => new MotorcycleController(req, res, next)
  .updateMotorcycleController());

export default routes;
