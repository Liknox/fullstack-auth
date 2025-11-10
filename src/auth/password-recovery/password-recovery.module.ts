import { Module } from "@nestjs/common"

import { PasswordRecoveryController } from "./password-recovery.controller"
import { PasswordRecoveryService } from "./password-recovery.service"
import { MailModule } from "@/libs/mail/mail.module"
import { MailService } from "@/libs/mail/mail.service"
import { UserService } from "@/user/user.service"

@Module({
   imports: [MailModule],
   controllers: [PasswordRecoveryController],
   providers: [PasswordRecoveryService, UserService, MailService],
   exports: [PasswordRecoveryService],
})
export class PasswordRecoveryModule {}
