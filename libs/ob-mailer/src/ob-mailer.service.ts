import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ObMailerService {
  constructor(private readonly mailerService: MailerService) {}

  async test() {
    await this.mailerService.sendMail({
      to: 'catalyst8849@gmail.com',
      subject: '테스트 이메일',
      text: '테스트 이메일',
    });
  }
}
