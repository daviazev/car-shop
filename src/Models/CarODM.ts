/* eslint-disable no-param-reassign */
import { Model, models, Schema, model } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.Cars || model('Cars', this.schema);
  }

  public async createCar(car: ICar): Promise<ICar> {
    const newCar = await this.model.create({ ...car });
    return newCar;
  }

  public async findCars(): Promise<ICar[]> {
    const allCars = await this.model.find({}, { __v: false });
    return allCars;
  }

  public async findCarById(id: string): Promise<ICar[]> {
    const car = await this.model.find({ _id: id }, { __v: false });
    return car;
  }
}

export default CarODM;
