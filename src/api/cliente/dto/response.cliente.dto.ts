import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsString, IsNotEmpty, IsOptional} from 'class-validator';

export class ResponseClienteDto {
    
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

    constructor(props: ResponseClienteDto) {
        this.IdCliente = props.IdCliente;
        this.Nome = props.Nome;
        this.Email = props.Email;
        this.Cpf = props.Cpf;
        this.DtNasc = props.DtNasc;
        this.Uf = props.Uf;
        this.Cidade = props.Cidade;
      }
}