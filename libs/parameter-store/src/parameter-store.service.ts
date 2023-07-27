import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ParameterStoreService {
  constructor(private readonly configService: ConfigService) {}

  get(parameter: string): string {
    return this.configService.get<string>(parameter);
  }
}
