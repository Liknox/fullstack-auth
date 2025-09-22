import { BaseOAuthService } from "./base-oauth.service"
import { GoogleLinks } from "./config"
import { TypeProviderOptions } from "./types/provider-options.types"
import { TypeUserInfo } from "./types/user-info.types"

export class GoogleProvider extends BaseOAuthService {
   public constructor(options: TypeProviderOptions) {
      super({
         ...GoogleLinks,
         scopes: options.scopes,
         client_id: options.client_id,
         client_secret: options.client_secret,
      })
   }

   public async extractUserInfo(data: GoogleProfile): Promise<TypeUserInfo> {
      return super.extractUserInfo({
         email: data.email,
         name: data.name,
         picture: data.picture,
      })
   }
}

interface GoogleProfile extends Record<string, any> {
   aud: string
   azp: string
   email: string
   email_verified: boolean
   exp: number
   family_name: string
   given_name: string
   hd: string
   iat: number
   iss: string
   jti: string
   locale: string
   name: string
   nbf: number
   picture: string
   sub: string
   access_token: string
   refresh_token: string
}
