import { Module } from '@nestjs/common';
import { Api1Controller } from './api1.controller';
import { Api1Service } from './api1.service';
import { ObMailerModule } from 'lib/ob-mailer';

@Module({
  imports: [ObMailerModule],
  controllers: [Api1Controller],
  providers: [Api1Service],
})
export class Api1Module {}
