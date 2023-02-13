import ICar from '../Interfaces/ICar';

class Car {
  private _id: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean | undefined;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(carInfo: ICar) {
    this._id = carInfo.id;
    this._model = carInfo.model;
    this._year = carInfo.year;
    this._color = carInfo.color;
    this._status = carInfo.status;
    this._buyValue = carInfo.buyValue;
    this._doorsQty = carInfo.doorsQty;
    this._seatsQty = carInfo.seatsQty;
  }

  getId() {
    return this._id;
  }

  setId(id: string) {
    this._id = id;
  }

  getModel() {
    return this._model;
  }

  setModel(model: string) {
    this._model = model;
  }

  getYear() {
    return this._year;
  }

  setYear(year: number) {
    this._year = year;
  }

  getColor() {
    return this._color;
  }

  setColor(color: string) {
    this._color = color;
  }

  getStatus() {
    return this._status;
  }

  setStatus(status: boolean) {
    this._status = status;
  }

  getBuyValue() {
    return this._buyValue;
  }

  setBuyValue(value: number) {
    this._buyValue = value;
  }

  getDoorsQty() {
    return this._doorsQty;
  }

  setDoorsQyt(qty: number) {
    this._doorsQty = qty;
  }

  getSeatsQty() {
    return this._seatsQty;
  }

  setSeatsQty(qty: number) {
    this._seatsQty = qty;
  }
}

export default Car;
