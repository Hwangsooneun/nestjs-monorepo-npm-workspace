import { Injectable } from '@nestjs/common';
import { ParameterStoreService } from '@orangeboard/share';

@Injectable()
export class Api2Service {
  constructor(private readonly configService: ParameterStoreService) {}
  getHello(): string {
    console.log(this.configService.get('KAKAO_CALLBACK_URL_V2'));
    return 'Hello World!';
  }
}
