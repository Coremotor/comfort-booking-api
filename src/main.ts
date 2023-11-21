import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { json } from 'express';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem'),
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });
  app.use(json({ limit: '50mb' }));

  await app.listen(3000);
}
void bootstrap();
