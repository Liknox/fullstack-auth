import { ValidationPipe } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import RedisStore from "connect-redis"
import * as cookieParser from "cookie-parser"
import * as session from "express-session"
import IORedis from "ioredis"

import { AppModule } from "./app.module"
import { StringValue, ms } from "./libs/common/utils/ms.util"
import { parseBoolean } from "./libs/common/utils/parse-boolean.util"

async function bootstrap() {
   const app = await NestFactory.create(AppModule)

   const config = app.get(ConfigService)
   const redis = new IORedis(
      config.getOrThrow<string>("REDIS_URI", "redis://:password@redis:6379/0")
   )

   app.use(cookieParser(config.getOrThrow<string>("COOKIES_SECRET", "secret")))

   app.useGlobalPipes(new ValidationPipe({ transform: true }))

   app.use(
      session({
         secret: config.getOrThrow<string>("SESSION_SECRET", "secret12345"),
         name: config.getOrThrow<string>("SESSION_NAME", "session"),
         resave: true,
         saveUninitialized: false,
         cookie: {
            domain: config.getOrThrow<string>("SESSION_DOMAIN", "localhost"),
            maxAge: ms(
               config.getOrThrow<StringValue>("SESSION_MAX_AGE", "30d")
            ),
            httpOnly: parseBoolean(
               config.getOrThrow<string>("SESSION_HTTP_ONLY", "true")
            ),
            secure: parseBoolean(
               config.getOrThrow<string>("SESSION_SECURE", "false")
            ),
            sameSite: "lax",
         },
         store: new RedisStore({
            client: redis,
            prefix: config.getOrThrow<string>("SESSION_FOLDER", "sessions:"),
         }),
      })
   )

   app.enableCors({
      origin: config.getOrThrow<string>(
         "FRONTEND_URL",
         "http://localhost:3000"
      ),
      credentials: true,
      exposedHeaders: ["set-cookie"],
   })

   await app.listen(config.getOrThrow<number>("APPLICATION_PORT", 4000))
}

bootstrap()
