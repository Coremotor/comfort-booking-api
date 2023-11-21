import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });
  app.use(json({ limit: '50mb' }));

  await app.listen(3000);
}
void bootstrap();
