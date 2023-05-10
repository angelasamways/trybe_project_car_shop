import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import GenerateError from '../helpers/GenerateError';

export default class MotorcycleService {
  private createMotorcycle(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  async creating(moto: IMotorcycle) {
    // Criar instância da Model de Payment usando Mongoose
    const motorcycleModel = new MotorcycleODM();
    // Inserir os dados no banco
    const creatingMotorcycle = await motorcycleModel.create(moto);
    // Retornar os dados com o id
    return this.createMotorcycle(creatingMotorcycle);
  }

  async getAll() {
    const motorcycleModel = new MotorcycleODM();
    const getCars = await motorcycleModel.findAll();
    const allCars = getCars.map((moto) => this.createMotorcycle(moto));
    return allCars;
  }

  async getById(id: string) {
    const motorcycleModel = new MotorcycleODM();
    const getMotos = await motorcycleModel.getById(id);
    if (!getMotos) throw new GenerateError(404, 'Motorcycle not found');    
    return this.createMotorcycle(getMotos);
  }
}
