import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsString, IsNotEmpty, IsOptional} from 'class-validator';

export class SearchClienteDto {
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    Nome: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    Cpf: string;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    Email: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Uf: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Cidade: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    DtNasc: string;

    constructor(props: SearchClienteDto) {
        this.Nome = props.Nome;
        this.Email = props.Email;
        this.Cpf = props.Cpf;
        this.DtNasc = props.DtNasc;
        this.Uf = props.Uf;
        this.Cidade = props.Cidade;
      }
}