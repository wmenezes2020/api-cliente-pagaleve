import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsString} from 'class-validator';

export class CreateClienteDto {
    
    @ApiProperty()
    @IsString()
    Nome: string;
    
    @ApiProperty()
    @IsEmail()
    Email: string;
    
    @ApiProperty()
    @IsString()
    Cpf: string;

    @ApiProperty()
    @IsString()
    DtNasc: string;
    
    @ApiProperty()
    @IsString()
    Uf: string;
    
    @ApiProperty()
    @IsString()
    Cidade: string;
}