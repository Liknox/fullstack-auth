import { MailerOptions } from "@nestjs-modules/mailer"
import { ConfigService } from "@nestjs/config"

import { isDev } from "@/libs/common/utils/is-dev.util"

export const getMailerConfig = async (
   configService: ConfigService
): Promise<MailerOptions> => ({
   transport: {
      host: configService.getOrThrow<string>("MAIL_HOST", "smtp.gmail.com"),
      port: configService.getOrThrow<number>("MAIL_PORT", 587),
      secure: !isDev(configService),
      auth: {
         user: configService.getOrThrow<string>("MAIL_LOGIN", "test@email.com"),
         pass: configService.getOrThrow<string>("MAIL_PASSWORD", "password"),
      },
   },
   defaults: {
      from: `"FullStack Auth" ${configService.getOrThrow<string>("MAIL_LOGIN", "test@email.com")}`,
   },
})
