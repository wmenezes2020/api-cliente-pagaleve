import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsString, IsNotEmpty, IsOptional} from 'class-validator';

export class ResponseDeleteClienteDto {
    
    @ApiProperty()
    IdCliente: string;

    @ApiProperty()
    status: string;

    constructor(props: ResponseDeleteClienteDto) {
        this.IdCliente = props.IdCliente;
        this.status = props.status;
      }
}