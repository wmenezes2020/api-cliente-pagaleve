import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ClienteController } from './cliente/controller/cliente.controller';
import { ClienteService } from './cliente/service/cliente.service';
import { ClienteProvider } from './cliente/provider/cliente.provider';

@Module({
    imports: [HttpModule],
    controllers: [
        ClienteController
    ],
    providers: [
        ClienteService,
        ClienteProvider
    ],
})
export class ApiModule {}
