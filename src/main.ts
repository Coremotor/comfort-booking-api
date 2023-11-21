import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  app.enableCors({
    allowedHeaders: [
      'Cache-Control',
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
      'x-api-token',
      'Access-Control-Allow-Headers',
      'Access-Control-Request-Method',
      'Access-Control-Allow-Origin',
      'Authorization',
      'Authorized',
    ],
    exposedHeaders: ['Content-Disposition'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: ['https://admin.for-test-apps.ru', '*'],
    maxAge: 60 * 60 * 24 * 365,
    preflightContinue: false,
  });
  app.use(json({ limit: '50mb' }));

  await app.listen(3000);
}
void bootstrap();
