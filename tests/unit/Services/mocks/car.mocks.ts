import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';

export const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutput: Car = new Car({
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

export const allCars: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const carById: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

export const validId = '634852326b35b59438fbea31';

export const invalidId = '634852326b35b59438fxablau';

export const carUpdatedInfos: ICar = {
  model: 'Camaro',
  year: 2016,
  color: 'Yellow',
  status: true,
  buyValue: 300000,
  doorsQty: 2,
  seatsQty: 2,
};

export const carUpdated: ICar = {
  id: '634852326b35b59438fbea31',
  model: 'Camaro',
  year: 2016,
  color: 'Yellow',
  status: true,
  buyValue: 300000,
  doorsQty: 2,
  seatsQty: 2,
};