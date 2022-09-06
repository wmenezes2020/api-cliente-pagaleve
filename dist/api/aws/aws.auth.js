"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsAuth = void 0;
const common_1 = require("@nestjs/common");
let AwsAuth = class AwsAuth {
    static awsConfig() {
        const config = {
            'region': process.env.AWS_REGION,
            "endpoint": process.env.DYNAMODB_ENDPOINT,
            'accessKeyId': process.env.AWS_ACCESS_KEY_ID,
            'secretAccessKey': process.env.AWS_SECRET_ACCESS_KEY,
        };
        return config;
    }
};
AwsAuth = __decorate([
    (0, common_1.Injectable)()
], AwsAuth);
exports.AwsAuth = AwsAuth;
//# sourceMappingURL=aws.auth.js.map