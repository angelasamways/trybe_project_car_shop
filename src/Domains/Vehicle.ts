import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | false;
  protected buyValue: number;

  constructor(
    cars: IVehicle,
  ) {
    this.id = cars.id;
    this.model = cars.model;
    this.year = cars.year;
    this.color = cars.color;
    this.status = cars.status || false;
    this.buyValue = cars.buyValue;
  }
}

export default Vehicle;