import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carInput, carOutput, carsOutput } from '../Mock/CarMock';

describe('Deve possibilitar criar a rota /cars', function () {
  it('1.Criando a rota para cadastrar o carro com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.creating(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('2.Criando a rota para cadastrar sem SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new CarService();
    const result = await service.creating(carInput);

    expect(result).to.be.deep.equal(null);
  });

  it('3. É possível listar todos os carros com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves(carsOutput);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carsOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});