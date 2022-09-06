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
exports.ResponseClienteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResponseClienteDto {
    constructor(props) {
        this.IdCliente = props.IdCliente;
        this.Nome = props.Nome;
        this.Email = props.Email;
        this.Cpf = props.Cpf;
        this.DtNasc = props.DtNasc;
        this.Uf = props.Uf;
        this.Cidade = props.Cidade;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseClienteDto.prototype, "IdCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseClienteDto.prototype, "Nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseClienteDto.prototype, "Email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseClienteDto.prototype, "Cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseClienteDto.prototype, "DtNasc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseClienteDto.prototype, "Uf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseClienteDto.prototype, "Cidade", void 0);
exports.ResponseClienteDto = ResponseClienteDto;
//# sourceMappingURL=response.cliente.dto.js.map