import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  req: Request;
  res: Response;
  next: NextFunction;
  service: CarService;

  constructor(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createCarController() {
    const car: ICar = { ...this.req.body };

    try {
      const newCar = await this.service.createCarService(car);
      return this.res.status(200).json(newCar);
    } catch (error) {
      return this.res.status(500).json({ message: 'erro interno' });
    }
  }
}

export default CarController;