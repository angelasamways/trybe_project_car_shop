import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const motorcycleInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};
const motorcycleOutput: Motorcycle = new Motorcycle({
  id: '645be52f669ab72ae707c650',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

export {
  motorcycleInput,
  motorcycleOutput,
};