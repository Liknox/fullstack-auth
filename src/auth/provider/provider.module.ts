import { Module } from "@nestjs/common"
import {
   ProviderOptionsSymbol,
   TypeAsyncOptions,
   TypeOptions,
} from "./provider.constants"
import { ProviderService } from "./provider.service"

@Module({})
export class ProviderModule {
   static register(options: TypeOptions) {
      return {
         module: ProviderModule,
         providers: [
            {
               provide: ProviderOptionsSymbol,
               useValue: options.services,
            },
            ProviderService,
         ],
         exports: [ProviderService],
      }
   }

   public static registerAsync(options: TypeAsyncOptions) {
      return {
         module: ProviderModule,
         imports: options.imports,
         providers: [
            {
               useFactory: options.useFactory,
               provide: ProviderOptionsSymbol,
               inject: options.inject,
            },
            ProviderService,
         ],
         exports: [ProviderService],
      }
   }
}
