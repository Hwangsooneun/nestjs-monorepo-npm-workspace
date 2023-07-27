import { NestFactory } from '@nestjs/core';
import { Api1Module } from './api1.module';

async function bootstrap() {
  const app = await NestFactory.create(Api1Module);
  await app.listen(3000);
}
bootstrap();
