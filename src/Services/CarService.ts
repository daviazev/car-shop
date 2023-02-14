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
    if (this.createCarDomain(newCar) === null) throw Error('Invalid car information');
    return this.createCarDomain(newCar);
  }

  public async findCarsService() {
    const carODM = new CarODM();
    const allCars = await carODM.findCars();
    return allCars.map((doc) => this.createCarDomain(doc));
  }

  public async findCarByIdService(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findCarById(id);
    return car.map((doc) => this.createCarDomain(doc));
  }

  public async updateCarService(id: string, car: Partial<ICar>) {
    const carODM = new CarODM();
    const carToUpdate = await carODM.updateCar(id, car);
    return this.createCarDomain(carToUpdate);
  }
}

export default CarService;