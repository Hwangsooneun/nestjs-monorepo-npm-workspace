import { Injectable } from '@nestjs/common';

@Injectable()
export class Api2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
