import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as AWS from 'aws-sdk';
import { CreateClienteDto } from '../dto/create.cliente.dto';
import { Cliente } from '../entities/cliente.entity';
import { AwsAuth } from '../../aws/aws.auth';
import { Observable, throwError } from 'rxjs';
import { SearchClienteDto } from '../dto/search.cliente.dto';
let awsConfig, dynamoDB;

@Injectable()
export class ClienteService {
    constructor() {
        awsConfig = AwsAuth.awsConfig();
        AWS.config.update(awsConfig);
        dynamoDB = new AWS.DynamoDB.DocumentClient();
    }

    async getClientes(): Promise<any> {
        try {
          return dynamoDB
            .scan({
              TableName: process.env.CLIENT_TABLE_NAME,
            })
            .promise()
            .then(((response: any) => {
                return response?.Items;
              }),
            );
        } catch (e) {
          throw new InternalServerErrorException(e);
        }
    }
    
    async searchCliente(body: SearchClienteDto): Promise<any> {
        const query: SearchClienteDto = { 
            Nome: body.Nome ? body.Nome : '', 
            Cpf: body.Cpf ? body.Cpf : '', 
            Email: body.Email ? body.Email : '',
            Uf: body.Uf ? body.Uf : '',
            Cidade: body.Cidade ? body.Cidade : '',
            DtNasc: body.DtNasc ? body.DtNasc : '',
        };
        try {
          return dynamoDB
            .scan({
              TableName: process.env.CLIENT_TABLE_NAME,
              FilterExpression: "contains(Nome, :Nome) AND contains(Cpf, :Cpf) AND contains(Email, :Email) AND contains(Uf, :Uf) AND contains(Cidade, :Cidade) AND contains(DtNasc, :DtNasc)",
              ExpressionAttributeValues: { 
                ":Nome": query?.Nome, 
                ":Cpf": query?.Cpf, 
                ":Email": query?.Email,
                ":Uf": query?.Uf,
                ":Cidade": query?.Cidade,
                ":DtNasc": query?.DtNasc,
              }
            })
            .promise()
            .then(((response: any) => {
                return response?.Items;
              }),
            );
        } catch (e) {
          throw new InternalServerErrorException(e);
        }
    }
    
    async createCliente(createClienteDto: CreateClienteDto): Promise<any> {
        const IdCliente = uuid();
        const clienteObj = {
            IdCliente: IdCliente,
            ...createClienteDto,
        };
        try {
            await dynamoDB
            .put({
                TableName: process.env.CLIENT_TABLE_NAME,
                Item: clienteObj,
            })
            .promise();
            return this.getCliente(IdCliente);
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    async getCliente(IdCliente: string): Promise<any> {
        try {
            return await dynamoDB
            .get({
                TableName: process.env.CLIENT_TABLE_NAME,
                Key: { IdCliente },
            })
            .promise()
            .then(((response: any) => {
                return response?.Item;
              }),
            );
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
    
    async updateCliente(IdCliente: string, body: CreateClienteDto): Promise<any> {
        try {
            await dynamoDB
            .update({
                TableName: process.env.CLIENT_TABLE_NAME,
                Key: { IdCliente },
                UpdateExpression: "set Nome=:Nome, Email=:Email, Cpf=:Cpf, DtNasc=:DtNasc, Uf=:Uf, Cidade=:Cidade",
                ExpressionAttributeValues: {
                    ":Nome": body.Nome,
                    ":Email": body.Email,
                    ":Cpf": body.Cpf,
                    ":DtNasc": body.DtNasc,
                    ":Uf": body.Uf,
                    ":Cidade": body.Cidade
                },
                ReturnValues: "UPDATED_NEW"
            })
            .promise();
            return this.getCliente(IdCliente);
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    async deleteCliente(IdCliente: string): Promise<any> {
        try {
            await dynamoDB
            .delete({
                TableName: process.env.CLIENT_TABLE_NAME,
                Key: {
                IdCliente: IdCliente,
                },
            })
            .promise();
            return [
                {'status': 'success',
                'IdCliente': IdCliente}
            ];
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

}
