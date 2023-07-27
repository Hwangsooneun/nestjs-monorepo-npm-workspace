import { Injectable } from '@nestjs/common';
import { ObMailerService } from 'lib/ob-mailer';

@Injectable()
export class Api1Service {
  constructor(private readonly obMailerService: ObMailerService) {}
  async getHello() {
    await this.obMailerService.test();
  }
}
