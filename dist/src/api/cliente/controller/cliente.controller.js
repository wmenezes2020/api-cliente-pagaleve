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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../guards/auth.guard");
const cliente_service_1 = require("../service/cliente.service");
const create_cliente_dto_1 = require("../dto/create.cliente.dto");
const search_cliente_dto_1 = require("../dto/search.cliente.dto");
const response_cliente_dto_1 = require("../dto/response.cliente.dto");
const response_delete_cliente_dto_1 = require("../dto/response.delete.cliente.dto");
let ClienteController = class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    createCliente(createClienteDto) {
        return this.clienteService.createCliente(createClienteDto);
    }
    getClientes() {
        return this.clienteService.getClientes();
    }
    searchCliente(body) {
        return this.clienteService.searchCliente(body);
    }
    getCliente(id) {
        return this.clienteService.getCliente(id);
    }
    updateCliente(id, createClienteDto) {
        return this.clienteService.updateCliente(id, createClienteDto);
    }
    deleteCliente(id) {
        return this.clienteService.deleteCliente(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        type: response_cliente_dto_1.ResponseClienteDto,
    }),
    (0, swagger_1.ApiBearerAuth)('auth-token'),
    (0, common_1.UseGuards)(new auth_guard_1.AuthGuard()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "createCliente", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiCreatedResponse)({}),
    (0, swagger_1.ApiBearerAuth)('auth-token'),
    (0, common_1.UseGuards)(new auth_guard_1.AuthGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "getClientes", null);
__decorate([
    (0, common_1.Post)('search'),
    (0, swagger_1.ApiCreatedResponse)({}),
    (0, swagger_1.ApiBearerAuth)('auth-token'),
    (0, common_1.UseGuards)(new auth_guard_1.AuthGuard()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_cliente_dto_1.SearchClienteDto]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "searchCliente", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiCreatedResponse)({
        type: response_cliente_dto_1.ResponseClienteDto,
    }),
    (0, swagger_1.ApiBearerAuth)('auth-token'),
    (0, common_1.UseGuards)(new auth_guard_1.AuthGuard()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getCliente", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiCreatedResponse)({
        type: response_cliente_dto_1.ResponseClienteDto,
    }),
    (0, swagger_1.ApiBearerAuth)('auth-token'),
    (0, common_1.UseGuards)(new auth_guard_1.AuthGuard()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "updateCliente", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiCreatedResponse)({
        type: response_delete_cliente_dto_1.ResponseDeleteClienteDto,
    }),
    (0, swagger_1.ApiBearerAuth)('auth-token'),
    (0, common_1.UseGuards)(new auth_guard_1.AuthGuard()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "deleteCliente", null);
ClienteController = __decorate([
    (0, common_1.Controller)('cliente'),
    (0, swagger_1.ApiTags)('cliente'),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map