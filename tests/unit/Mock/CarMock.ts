import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};
const carOutput: Car = new Car({
  id: '645be275669ab72ae707c64e',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

export {
  carInput,
  carOutput,
};