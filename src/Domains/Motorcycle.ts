// import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorInfos: IMotorcycle) {
    super(motorInfos);
    this.category = motorInfos.category;
    this.engineCapacity = motorInfos.engineCapacity;
  }

  getCategory() {
    return this.category;
  }

  setCategory(category: string) {
    this.category = category;
  }

  getEngineCapacity() {
    return this.engineCapacity;
  }

  setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;
