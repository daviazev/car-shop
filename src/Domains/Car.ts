import ICar from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | undefined;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(carInfo: ICar) {
    this.id = carInfo.id;
    this.model = carInfo.model;
    this.year = carInfo.year;
    this.color = carInfo.color;
    this.status = carInfo.status;
    this.buyValue = carInfo.buyValue;
    this.doorsQty = carInfo.doorsQty;
    this.seatsQty = carInfo.seatsQty;
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

  getDoorsQty() {
    return this.doorsQty;
  }

  setDoorsQyt(qty: number) {
    this.doorsQty = qty;
  }

  getSeatsQty() {
    return this.seatsQty;
  }

  setSeatsQty(qty: number) {
    this.seatsQty = qty;
  }
}

export default Car;
