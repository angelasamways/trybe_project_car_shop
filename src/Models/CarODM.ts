import {
  Model,
  Schema,
  isValidObjectId,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import GenerateError from '../helpers/GenerateError';

class CarODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<ICar>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado.
  }

  async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  async getById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new GenerateError(422, 'Invalid mongo id');
    return this.model.findById(id);
  }

  async updateById(id: string, carToUpdate: ICar): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new GenerateError(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(id, carToUpdate, { new: true });
  }
}

export default CarODM;
