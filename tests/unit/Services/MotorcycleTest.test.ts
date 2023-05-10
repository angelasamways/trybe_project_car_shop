import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcycleInput, motorcycleOutput, motorcyclesOutput } from '../Mock/MotorcycleMock';

describe('1.Deve possibilitar criar a rota /motorcycles', function () {
  it('Criando a rota para cadastrar a moto com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.creating(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('2.Criando a rota para cadastrar sem SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new MotorcycleService();
    const result = await service.creating(motorcycleInput);

    expect(result).to.be.deep.equal(null);
  });

  it('3. É possível listar todas as motos com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves(motorcyclesOutput);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorcyclesOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});
