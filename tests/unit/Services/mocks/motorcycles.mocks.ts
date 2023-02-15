import Motorcycle from '../../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const hondaModel = 'Honda Cb 600f Hornet';

export const motorcycleInput = {
  model: hondaModel,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcycleOutput: Motorcycle = new Motorcycle({
  id: '6348513f34c397abcad040b2',
  model: hondaModel,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

export const allMotorcycles: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: hondaModel,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export const motorcycleById: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export const validId = '634852326b35b59438fbea31';

export const invalidId = '634852326b35b59438fxablau';

export const motorcycleUpdatedInfos: IMotorcycle = {
  model: hondaModel,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcycleUpdated: IMotorcycle = {
  id: '634852326b35b59438fbea2f',
  model: hondaModel,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};
