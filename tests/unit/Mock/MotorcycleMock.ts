import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const honda = 'Honda Cb 600f Hornet';

const motorcycleInput: IMotorcycle = {
  model: honda,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};
const motorcycleOutput: Motorcycle = new Motorcycle({
  id: '645be52f669ab72ae707c650',
  model: honda,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

const motorcyclesOutput: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: honda,
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

export {
  motorcycleInput,
  motorcycleOutput,
  motorcyclesOutput,
};