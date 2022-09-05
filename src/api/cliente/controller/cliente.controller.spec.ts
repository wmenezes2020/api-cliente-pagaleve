import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from '../service/cliente.service';
import { ClienteController } from './cliente.controller';
import { CreateClienteDto } from '../dto/create.cliente.dto';
import { ResponseClienteDto } from '../dto/response.cliente.dto';
import { ResponseDeleteClienteDto } from '../dto/response.delete.cliente.dto';
import { SearchClienteDto } from '../dto/search.cliente.dto';

const responseCliente: ResponseClienteDto = {
  IdCliente: '123456',
  Nome: 'Manoel de Oliveira',
  Email: 'manoel@gmail.com',
  Cpf: '12345678900',
  DtNasc: '09/11/1985',
  Uf: 'SE',
  Cidade: 'Aracaju'
};

const responseDeleteCliente: ResponseDeleteClienteDto = {
  IdCliente: '123456',
  status: 'success'
};

const serviceProviderMock = {
  getClientes: jest.fn().mockImplementation((params: any) => {
    return responseCliente;
  }),
  searchCliente: jest.fn()
    .mockImplementation((params: SearchClienteDto) => {
      return responseCliente;
  }),
  createCliente: jest.fn()
    .mockImplementation((body: CreateClienteDto) => {
      return responseCliente;
  }),
  getCliente: jest.fn().mockImplementation((params: any) => {
    return responseCliente;
  }),
  updateCliente: jest.fn().mockImplementation((params: any) => {
    return responseCliente;
  }),
  deleteCliente: jest.fn().mockImplementation((params: any) => {
    return responseDeleteCliente;
  }),
};
describe('ClienteController', () => {
  let service: ClienteService;
  let controller: ClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteService,
        { provide: ClienteController, useValue: serviceProviderMock },
      ],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
    controller = module.get<ClienteController>(ClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it('getClientes', async () => {
    const result = await controller.getClientes();
    expect(controller.getClientes).toBeDefined();
    expect(typeof result).toEqual('object');
  });

  it('searchCliente', async () => {
    const query: SearchClienteDto = {
      Cpf: '12345678900',
      Email: null
    };
    const result = await controller.searchCliente(query);
    expect(controller.searchCliente).toBeDefined();
    expect(typeof result).toEqual('object');
  });

  it('createCliente', async () => {
    const query: ResponseClienteDto = {
      IdCliente: '123456',
      Nome: 'Manoel de Oliveira',
      Email: 'manoel@gmail.com',
      Cpf: '12345678900',
      DtNasc: '09/11/1985',
      Uf: 'SE',
      Cidade: 'Aracaju'
    };
    const result = await controller.createCliente(query);
    expect(controller.createCliente).toBeDefined();
    expect(typeof result).toEqual('object');
  });

  it('getCliente', async () => {
    const query = '123456';
    const result = await controller.getCliente(query);
    expect(controller.getCliente).toBeDefined();
    expect(typeof result).toEqual('object');
  });

  it('updateCliente', async () => {
    const id = '123456';
    const query: CreateClienteDto = {
      Nome: 'Manoel de Oliveira',
      Email: 'manoel@gmail.com',
      Cpf: '12345678900',
      DtNasc: '09/11/1985',
      Uf: 'SE',
      Cidade: 'Aracaju'
    };
    const result = await controller.updateCliente(id, query);
    expect(controller.updateCliente).toBeDefined();
    expect(typeof result).toEqual('object');
  });

  it('deleteCliente', async () => {
    const id = '123456';
    const result = await controller.deleteCliente(id);
    expect(controller.deleteCliente).toBeDefined();
    expect(typeof result).toEqual('object');
  });
});
