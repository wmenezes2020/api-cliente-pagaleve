"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const winston_1 = require("winston");
const WinstonCloudWatch = require("winston-cloudwatch");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API CLIENTE')
        .setDescription('BFF de comunicação de Cliente desenvolvido como avaliação admissional da PagaLeve.')
        .setVersion('0.0.1')
        .addBearerAuth({
        description: `Authorization token no formato: Bearer <JWT>`,
        name: 'Autorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
    }, 'auth-token')
        .build();
    app.setGlobalPrefix('/cliente-api/');
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/cliente-api/api/docs', app, document);
    app.enableCors();
    app.useLogger((0, winston_1.createLogger)({
        format: winston.format.uncolorize(),
        transports: [
            new winston.transports.Console({
                format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), nest_winston_1.utilities.format.nestLike()),
            }),
            new WinstonCloudWatch({
                level: 'error',
                name: 'Cloudwatch Logs',
                logGroupName: process.env.AWS_CW_GROUP,
                logStreamName: process.env.AWS_CW_STREAM,
                awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
                awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
                awsRegion: process.env.AWS_REGION,
                messageFormatter: function (item) {
                    return (item.level + ': ' + item.message + ' ' + JSON.stringify(item.meta));
                },
            }),
        ],
    }));
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map