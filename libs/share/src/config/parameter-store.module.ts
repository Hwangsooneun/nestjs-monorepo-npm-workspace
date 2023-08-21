import { Module } from '@nestjs/common';
import { ParameterStoreService } from './parameter-store.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      cache: true,
      isGlobal: true,
    }),
  ],
  providers: [ParameterStoreService],
  exports: [ParameterStoreService],
})
export class ParameterStoreModule {}
