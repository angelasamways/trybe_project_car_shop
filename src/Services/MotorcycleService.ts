import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

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
}
