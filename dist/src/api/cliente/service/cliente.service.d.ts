import { CreateClienteDto } from '../dto/create.cliente.dto';
import { SearchClienteDto } from '../dto/search.cliente.dto';
export declare class ClienteService {
    constructor();
    getClientes(): Promise<any>;
    searchCliente(body: SearchClienteDto): Promise<any>;
    createCliente(createClienteDto: CreateClienteDto): Promise<any>;
    getCliente(IdCliente: string): Promise<any>;
    updateCliente(IdCliente: string, body: CreateClienteDto): Promise<any>;
    deleteCliente(IdCliente: string): Promise<any>;
}
