import { ClienteService } from '../service/cliente.service';
import { CreateClienteDto } from '../dto/create.cliente.dto';
import { SearchClienteDto } from '../dto/search.cliente.dto';
import { ResponseClienteDto } from '../dto/response.cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    createCliente(createClienteDto: CreateClienteDto): Promise<any>;
    getClientes(): Promise<any>;
    searchCliente(body: SearchClienteDto): Promise<any>;
    getCliente(id: string): Promise<ResponseClienteDto>;
    updateCliente(id: string, createClienteDto: CreateClienteDto): Promise<any>;
    deleteCliente(id: string): Promise<any>;
}
