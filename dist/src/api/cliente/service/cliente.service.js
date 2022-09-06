"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const AWS = require("aws-sdk");
const aws_auth_1 = require("../../aws/aws.auth");
let awsConfig, dynamoDB;
let ClienteService = class ClienteService {
    constructor() {
        awsConfig = aws_auth_1.AwsAuth.awsConfig();
        AWS.config.update(awsConfig);
        dynamoDB = new AWS.DynamoDB.DocumentClient();
    }
    async getClientes() {
        try {
            return dynamoDB
                .scan({
                TableName: process.env.CLIENT_TABLE_NAME,
            })
                .promise()
                .then(((response) => {
                return response === null || response === void 0 ? void 0 : response.Items;
            }));
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async searchCliente(body) {
        const query = {
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
                    ":Nome": query === null || query === void 0 ? void 0 : query.Nome,
                    ":Cpf": query === null || query === void 0 ? void 0 : query.Cpf,
                    ":Email": query === null || query === void 0 ? void 0 : query.Email,
                    ":Uf": query === null || query === void 0 ? void 0 : query.Uf,
                    ":Cidade": query === null || query === void 0 ? void 0 : query.Cidade,
                    ":DtNasc": query === null || query === void 0 ? void 0 : query.DtNasc,
                }
            })
                .promise()
                .then(((response) => {
                return response === null || response === void 0 ? void 0 : response.Items;
            }));
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async createCliente(createClienteDto) {
        const IdCliente = (0, uuid_1.v4)();
        const clienteObj = Object.assign({ IdCliente: IdCliente }, createClienteDto);
        try {
            await dynamoDB
                .put({
                TableName: process.env.CLIENT_TABLE_NAME,
                Item: clienteObj,
            })
                .promise();
            return this.getCliente(IdCliente);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async getCliente(IdCliente) {
        try {
            return await dynamoDB
                .get({
                TableName: process.env.CLIENT_TABLE_NAME,
                Key: { IdCliente },
            })
                .promise()
                .then(((response) => {
                return response === null || response === void 0 ? void 0 : response.Item;
            }));
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async updateCliente(IdCliente, body) {
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
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async deleteCliente(IdCliente) {
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
                { 'status': 'success',
                    'IdCliente': IdCliente }
            ];
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map