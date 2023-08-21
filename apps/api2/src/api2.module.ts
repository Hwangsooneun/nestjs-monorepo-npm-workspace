import { Module } from '@nestjs/common';
import { Api2Controller } from './api2.controller';
import { Api2Service } from './api2.service';
import { ParameterStoreModule } from '@orangeboard/share';

@Module({
  imports: [ParameterStoreModule],
  controllers: [Api2Controller],
  providers: [Api2Service],
})
export class Api2Module {}
