import { NestFactory } from '@nestjs/core';
import { Api2Module } from './api2.module';

async function bootstrap() {
  const app = await NestFactory.create(Api2Module);
  await app.listen(3000);
}
bootstrap();
