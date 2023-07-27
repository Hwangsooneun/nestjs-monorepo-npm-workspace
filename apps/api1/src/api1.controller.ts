import { Controller, Get } from '@nestjs/common';
import { Api1Service } from './api1.service';

@Controller()
export class Api1Controller {
  constructor(private readonly api1Service: Api1Service) {}

  @Get()
  getHello(): Promise<void> {
    return this.api1Service.getHello();
  }
}
