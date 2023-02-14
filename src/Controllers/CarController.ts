import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

const ERRO_INTERNO = 'Erro Interno';

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

    car.status = car.status !== undefined;

    try {
      const newCar = await this.service.createCarService(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      return this.res.status(500).json({ message: ERRO_INTERNO });
    }
  }

  public async findCarsController() {
    try {
      const allCars = await this.service.findCarsService();
      return this.res.status(200).json(allCars);
    } catch (error) {
      return this.res.status(500).json({ message: ERRO_INTERNO });
    }
  }

  public async findCarByIdController() {
    const { id } = this.req.params;

    try {
      const car = await this.service.findCarByIdService(id);
      if (car.length === 0) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(car[0]);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateCarController() {
    const { id } = this.req.params;
    const { body } = this.req;
 
    try {
      const car = await this.service.updateCarService(id, body);
      
      if (car === null) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarController;