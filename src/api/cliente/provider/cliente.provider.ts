import { Injectable } from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { CreateClienteDto } from '../dto/create.cliente.dto';


@Injectable()
export class ClienteProvider {
    constructor(private readonly clienteService: ClienteService) {}

}
