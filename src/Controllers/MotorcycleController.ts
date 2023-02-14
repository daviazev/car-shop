import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

const ERRO_INTERNO = 'Erro Interno';

class MotorcycleController {
  req: Request;
  res: Response;
  next: NextFunction;
  service: MotorcycleService;

  constructor(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createMotorcycleController() {
    const motorcycle: IMotorcycle = { ...this.req.body };

    motorcycle.status = motorcycle.status !== undefined;

    try {
      const newMotorcycle = await this.service.createMotorcycleService(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      return this.res.status(500).json({ message: ERRO_INTERNO });
    }
  }

  public async findMotorcyclesController() {
    try {
      const allMotorcycles = await this.service.findMotorcyclesService();
      return this.res.status(200).json(allMotorcycles);
    } catch (error) {
      return this.res.status(500).json({ message: ERRO_INTERNO });
    }
  }

  public async findMotorcycleByIdController() {
    const { id } = this.req.params;

    try {
      const motorcycle = await this.service.findMotorcycleByIdService(id);
      if (motorcycle.length === 0) {
        return this
          .res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycle[0]);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateMotorcycleController() {
    const { id } = this.req.params;
    const { body } = this.req;
 
    try {
      const motorcycle = await this.service.updateMotorcycleService(id, body);
      
      if (motorcycle === null) {
        return this
          .res.status(404).json({ message: 'Motorcycle not found' });
      }

      return this.res.status(200).json(motorcycle);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcycleController;