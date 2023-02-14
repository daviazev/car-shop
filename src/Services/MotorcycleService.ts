import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {  
      return new Motorcycle(moto);
    }

    return null;
  }

  public async createMotorcycleService(moto: IMotorcycle) {
    const carODM = new MotorcycleODM();
    const newMotorcycle = await carODM.create(moto);
    if (this.createMotorcycleDomain(newMotorcycle) === null) throw Error('Invalid car information');
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findMotorcyclesService() {
    const carODM = new MotorcycleODM();
    const allCars = await carODM.find();
    return allCars.map((doc) => this.createMotorcycleDomain(doc));
  }

  public async findMotorcycleByIdService(id: string) {
    const carODM = new MotorcycleODM();
    const car = await carODM.findById(id);
    return car.map((doc) => this.createMotorcycleDomain(doc));
  }

  public async updateMotorcycleService(id: string, moto: Partial<IMotorcycle>) {
    const carODM = new MotorcycleODM();
    const carToUpdate = await carODM.update(id, moto);
    return this.createMotorcycleDomain(carToUpdate);
  }
}

export default MotorcycleService;