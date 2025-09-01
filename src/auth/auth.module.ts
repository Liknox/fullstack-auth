import { Logger, Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { UserService } from "@/user/user.service"

import { GoogleRecaptchaModule } from "@nestlab/google-recaptcha"
import { recaptchaConfig } from "@/config/recaptcha.config"

@Module({
   imports: [GoogleRecaptchaModule.forRootAsync(recaptchaConfig)],
   controllers: [AuthController],
   providers: [AuthService, UserService],
})
export class AuthModule {}
