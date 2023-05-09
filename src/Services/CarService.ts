import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import GenerateError from '../helpers/GenerateError';

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

  async getAll() {
    const carModel = new CarODM();
    const getCars = await carModel.findAll();
    const allCars = getCars.map((car) => this.createCar(car));
    return allCars;
  }

  async getById(id: string) {
    const carModel = new CarODM();
    const getCars = await carModel.getById(id);
    if (!getCars) throw new GenerateError(404, 'Car not found');    
    return this.createCar(getCars);
  }
}
