import { forwardRef, Logger, Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { UserService } from "@/user/user.service"

import { GoogleRecaptchaModule } from "@nestlab/google-recaptcha"
import { recaptchaConfig } from "@/config/recaptcha.config"
import { ProviderModule } from "./provider/provider.module"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { getProvidersConfig } from "@/config/providers.config"
import { EmailConfirmationModule } from "./email-confirmation/email-confirmation.module"
import { MailService } from "@/libs/mail/mail.service"

@Module({
   imports: [
      ProviderModule.registerAsync({
         imports: [ConfigModule],
         useFactory: getProvidersConfig,
         inject: [ConfigService],
      }),
      GoogleRecaptchaModule.forRootAsync(recaptchaConfig),
      forwardRef(() => EmailConfirmationModule),
   ],
   controllers: [AuthController],
   providers: [AuthService, UserService, MailService],
   exports: [AuthService],
})
export class AuthModule {}
