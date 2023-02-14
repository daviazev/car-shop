import {
  Model,
  Schema,
  models,
  model,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(car: T): Promise<T> {
    const newCar = await this.model.create({ ...car });
    return newCar;
  }

  public async find(): Promise<T[]> {
    const allCars = await this.model.find({}, { __v: false });
    return allCars;
  }

  public async findById(id: string): Promise<T[]> {
    if (!isValidObjectId(id)) throw Error('Invalid Mongo id');
    const car = await this.model.find({ _id: id }, { __v: false });
    return car;
  }

  public async update(_id: string, car: Partial<T>) {
    if (!isValidObjectId(_id)) throw Error('Invalid Mongo id');

    const updatedCar = await this.model.findByIdAndUpdate(
      { _id },
      { ...car } as UpdateQuery<T>,
      { new: true },
    );

    return updatedCar;
  }
}

export default AbstractODM;