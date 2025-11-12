import { Module } from "@nestjs/common"

import { HealthController } from "./health.controller"
import { UserController } from "./user.controller"
import { UserService } from "./user.service"

@Module({
   controllers: [UserController, HealthController],
   providers: [UserService],
})
export class UserModule {}
