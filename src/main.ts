import {
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import { createLogger } from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
  .setTitle('API CLIENTE')
  .setDescription('BFF de comunicação de Cliente desenvolvido como avaliação admissional da PagaLeve.')
  .setVersion('0.0.1')
  .addBearerAuth(
    {
      description: `Authorization token no formato: Bearer <JWT>`,
      name: 'Autorization',
      bearerFormat: 'Bearer',
      scheme: 'Bearer',
      type: 'http',
      in: 'Header',    
    },
    'auth-token',
  )
  .build();

  app.setGlobalPrefix('/cliente-api/');

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/cliente-api/api/docs', app, document);

  app.enableCors();

  app.useLogger(
    createLogger({
      format: winston.format.uncolorize(),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
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
            return (
              item.level + ': ' + item.message + ' ' + JSON.stringify(item.meta)
            );
          },
        }),
      ],
    }),
  );

  const port = process.env.PORT || 5000;
  await app.listen(port);

}
bootstrap();
