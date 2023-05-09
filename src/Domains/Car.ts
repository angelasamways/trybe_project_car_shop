import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | false;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    cars: ICar,
  ) {
    this.id = cars.id;
    this.model = cars.model;
    this.year = cars.year;
    this.color = cars.color;
    this.status = cars.status || false;
    this.buyValue = cars.buyValue;
    this.doorsQty = cars.doorsQty;
    this.seatsQty = cars.seatsQty;
  }
}

export default Car;