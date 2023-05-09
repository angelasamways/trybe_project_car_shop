import {
  Schema,
  isValidObjectId,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import GenerateError from '../helpers/GenerateError';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    const modelName = 'motorcycles';
    super(schema, modelName);
  }

  async create(moto: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...moto });
  }

  async findAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  async getById(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new GenerateError(422, 'Invalid mongo id');
    return this.model.findById(id);
  }

  async updateById(id: string, motoToUpdate: IMotorcycle): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new GenerateError(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(id, motoToUpdate, { new: true });
  }
}

export default MotorcycleODM;
