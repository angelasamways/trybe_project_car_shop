import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async creating(car: ICar) {
    // Criar instância da Model de Payment usando Mongoose
    const carModel = new CarODM();
    // Inserir os dados no banco
    const creatingCar = await carModel.create(car);
    // Retornar os dados com o id
    return this.createCar(creatingCar);
  }
}
