import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
// import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
// import Car from '../../../src/Domains/Car';

import { 
  carInput,
  carOutput,
  allCars,
  carById,
  validId,
  invalidId,
  carUpdatedInfos,
  carUpdated,
} from './mocks';

describe('Testes para camada service - CarService', function () {
  afterEach(sinon.restore);

  const service = new CarService();

  describe('Criação de um veículo', function () {
    it('Deve cadastrar um veículo com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);
      const result = await service.createCarService(carInput);
      expect(result).to.be.deep.equal(carOutput);
    });
    it('Não deve ser possível cadastrar um veículo com dados faltando', async function () {
      sinon.stub(Model, 'create').resolves();
      try {
        await service.createCarService(carInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid car information');
      }
    });
  });

  describe('Retorno de todos os verículos', function () {
    it('Deve retornar todos os carros com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(allCars);
      const result = await service.findCarsService();
      expect(result).to.be.deep.equal(allCars);
    });
  });

  describe('Retorno de um carro pelo seu id', function () {
    it('Deve retornar o carro corretamente', async function () {
      sinon.stub(Model, 'find').resolves(carById);
      const result = await service.findCarByIdService(validId);
      expect(result).to.be.deep.equal(carById);
    });

    it('Não deve ser possível encontrar um carro com id inválido', async function () {
      sinon.stub(Model, 'find').resolves(carById);
      try {
        await service.findCarByIdService(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid Mongo id');
      }
    });
  });

  describe('Atualização de um carro', function () {
    it('Deve atualizar um veículo com sucesso', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(carUpdated);
      const result = await service.updateCarService(validId, carUpdatedInfos);
      expect(result).to.be.deep.equal(carUpdated);
    });
  });
});