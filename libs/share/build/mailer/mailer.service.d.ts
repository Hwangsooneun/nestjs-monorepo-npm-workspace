import { MailerService } from '@nestjs-modules/mailer';
export declare class ObMailerService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    test(): Promise<void>;
}
