import { ApiProperty } from "@nestjs/swagger";

export class Cliente {
    @ApiProperty()
    IdCliente: string;

    @ApiProperty()
    Nome: string;

    @ApiProperty()
    Email: string;
    
    @ApiProperty()
    Cpf: string;
    
    @ApiProperty()
    DtNasc: string;
    
    @ApiProperty()
    Uf: string;
    
    @ApiProperty()
    Cidade: string;
}