import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcycleService';

import {
  motorcycleInput,
  motorcycleOutput,
  allMotorcycles,
  motorcycleById,
  validId,
  invalidId,
  motorcycleUpdated,
  motorcycleUpdatedInfos,
} from './mocks/motorcycles.mocks';

describe('Testes para camada service - MotorcycleService', function () {
  afterEach(sinon.restore);
  
  const service = new MotorcycleService();
  
  describe('Criação de uma moto', function () {
    it('Deve cadastrar uma moto com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleOutput);
      const result = await service.createMotorcycleService(motorcycleInput);
      expect(result).to.be.deep.equal(motorcycleOutput);
    });
    it('Não deve ser possível cadastrar uma moto com dados faltando', async function () {
      sinon.stub(Model, 'create').resolves();
      try {
        await service.createMotorcycleService(motorcycleInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid car information');
      }
    });
  });
  
  describe('Retorno de todas as motos', function () {
    it('Deve retornar todas as motos com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(allMotorcycles);
      const result = await service.findMotorcyclesService();
      expect(result).to.be.deep.equal(allMotorcycles);
    });
  });
  
  describe('Retorno de uma moto pelo seu id', function () {
    it('Deve retornar o carro corretamente', async function () {
      sinon.stub(Model, 'find').resolves(motorcycleById);
      const result = await service.findMotorcycleByIdService(validId);
      expect(result).to.be.deep.equal(motorcycleById);
    });
  
    it('Não deve ser possível encontrar uma moto com id inválido', async function () {
      sinon.stub(Model, 'find').resolves(motorcycleById);
      try {
        await service.findMotorcycleByIdService(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid Mongo id');
      }
    });
  });
  
  describe('Atualização de uma moto', function () {
    it('Deve atualizar uma moto com sucesso', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(motorcycleUpdated);
      const result = await service.updateMotorcycleService(validId, motorcycleUpdatedInfos);
      expect(result).to.be.deep.equal(motorcycleUpdated);
    });
  });
});