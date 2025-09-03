import { Logger, Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { UserService } from "@/user/user.service"

import { GoogleRecaptchaModule } from "@nestlab/google-recaptcha"
import { recaptchaConfig } from "@/config/recaptcha.config"
import { ProviderModule } from "./provider/provider.module"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { getProvidersConfig } from "@/config/providers.config"

@Module({
   imports: [
      ProviderModule.registerAsync({
         imports: [ConfigModule],
         useFactory: getProvidersConfig,
         inject: [ConfigService],
      }),
      GoogleRecaptchaModule.forRootAsync(recaptchaConfig),
   ],
   controllers: [AuthController],
   providers: [AuthService, UserService],
})
export class AuthModule {}
