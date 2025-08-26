import { PrismaService } from "@/prisma/prisma.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class UserService {
   constructor(public readonly prismaService: PrismaService) {}

   public async findById() {}

   public async findByEmail() {}

   public async create() {}
}
