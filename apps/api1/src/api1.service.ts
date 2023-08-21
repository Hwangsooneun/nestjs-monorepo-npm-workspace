import { Injectable } from '@nestjs/common';
import { ObMailerService } from '@orangeboard/share';

@Injectable()
export class Api1Service {
  constructor(private readonly obMailerService: ObMailerService) {}
  async getHello() {
    await this.obMailerService.test();
  }
}
