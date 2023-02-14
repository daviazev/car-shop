import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(carInfo: IVehicle) {
    this.id = carInfo.id;
    this.model = carInfo.model;
    this.year = carInfo.year;
    this.color = carInfo.color;
    this.status = carInfo.status;
    this.buyValue = carInfo.buyValue;
  }

  getId() {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getModel() {
    return this.model;
  }

  setModel(model: string) {
    this.model = model;
  }

  getYear() {
    return this.year;
  }

  setYear(year: number) {
    this.year = year;
  }

  getColor() {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status: boolean) {
    this.status = status;
  }

  getBuyValue() {
    return this.buyValue;
  }

  setBuyValue(value: number) {
    this.buyValue = value;
  }
}

export default Vehicle;
