import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from '../service/cliente.service';
import { ClienteController } from '../controller/cliente.controller';
import { ClienteProvider } from './cliente.provider';

describe('ClienteProvider', () => {
  let provider: ClienteProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteProvider,
        ClienteService,
        ClienteController
      ],
    }).compile();

    provider = module.get<ClienteProvider>(ClienteProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
