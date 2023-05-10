import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carInput, carOutput } from '../Mock/CarMock';

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

  afterEach(function () {
    sinon.restore();
  });
});