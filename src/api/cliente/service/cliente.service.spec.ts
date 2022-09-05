import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './cliente.service';
import { ClienteController } from '../controller/cliente.controller';
import { SearchClienteDto } from '../dto/search.cliente.dto';
import { CreateClienteDto } from '../dto/create.cliente.dto';
import { ResponseClienteDto } from '../dto/response.cliente.dto';
import { ResponseDeleteClienteDto } from '../dto/response.delete.cliente.dto';

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
describe('ClienteService', () => {

  let service: ClienteService;
  let controller: ClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteController,
        { provide: ClienteService, useValue: serviceProviderMock },
      ],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
    controller = module.get<ClienteController>(ClienteController);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('getClientes', async () => {
    const result = await service.getClientes();
    expect(service.getClientes).toBeDefined();
    expect(typeof result).toEqual('object');
  });

  it('searchCliente', async () => {
    const query: SearchClienteDto = {
      Cpf: '12345678900',
      Email: '',
      Nome: '',
      Uf: '',
      Cidade: '',
      DtNasc: ''
    };
    const result = await service.searchCliente(query);
    expect(service.searchCliente).toBeDefined();
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
    const result = await service.createCliente(query);
    expect(service.createCliente).toBeDefined();
    expect(typeof result).toEqual('object');
  });

  it('getCliente', async () => {
    const query = '123456';
    const result = await service.getCliente(query);
    expect(service.getCliente).toBeDefined();
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
    const result = await service.updateCliente(id, query);
    expect(service.updateCliente).toBeDefined();
    expect(typeof result).toEqual('object');
  });

  it('deleteCliente', async () => {
    const id = '123456';
    const result = await service.deleteCliente(id);
    expect(service.deleteCliente).toBeDefined();
    expect(typeof result).toEqual('object');
  });
});
