import { Controller, Get } from '@nestjs/common';
import { Api2Service } from './api2.service';

@Controller()
export class Api2Controller {
  constructor(private readonly api2Service: Api2Service) {}

  @Get()
  getHello(): string {
    return this.api2Service.getHello();
  }
}
