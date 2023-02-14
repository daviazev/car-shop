import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {  
      return new Car(car);
    }

    return null;
  }

  public async createCarService(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.createCar(car);
    return this.createCarDomain(newCar);
  }
}

export default CarService;