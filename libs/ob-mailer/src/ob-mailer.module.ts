import { Module } from '@nestjs/common';
import { ObMailerService } from './ob-mailer.service';
import {
  ParameterStoreModule,
  ParameterStoreService,
} from 'lib/parameter-store';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ParameterStoreModule],
      useFactory: (config: ParameterStoreService) => {
        return {
          transport: {
            host: config.get('EMAIL_AUTH_STMP_HOST'),
            port: 465,
            auth: {
              user: config.get('EMAIL_AUTH_EMAIL'),
              pass: config.get('EMAIL_AUTH_PASSWORD'),
            },
          },
          defaults: {
            from: `"no-reply" <no-reply@orangeboard.co.kr>`,
          },
        };
      },
      inject: [ParameterStoreService],
    }),
  ],
  providers: [ObMailerService],
  exports: [ObMailerService],
})
export class ObMailerModule {}
