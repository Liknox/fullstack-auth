import { BaseOAuthService } from "./base-oauth.service"
import { GithubLinks } from "./config"
import { TypeProviderOptions } from "./types/provider-options.types"
import { TypeUserInfo } from "./types/user-info.types"

export class GithubProvider extends BaseOAuthService {
   public constructor(options: TypeProviderOptions) {
      super({
         ...GithubLinks,
         scopes: options.scopes || ["user"], // Default to 'user' scope for profile and email
         client_id: options.client_id,
         client_secret: options.client_secret,
      })
   }

   public async extractUserInfo(data: GithubProfile): Promise<TypeUserInfo> {
      return super.extractUserInfo({
         email: data.email,
         name: data.name || data.login, // Fallback to login if name is not provided
         picture: data.avatar_url,
      })
   }
}

interface GithubProfile extends Record<string, any> {
   login: string
   id: number
   node_id: string
   avatar_url: string
   gravatar_id: string
   url: string
   html_url: string
   followers_url: string
   following_url: string
   gists_url: string
   starred_url: string
   subscriptions_url: string
   organizations_url: string
   repos_url: string
   events_url: string
   received_events_url: string
   type: string
   site_admin: boolean
   name: string | null
   company: string | null
   blog: string | null
   location: string | null
   email: string | null
   hireable: boolean | null
   bio: string | null
   twitter_username: string | null
   public_repos: number
   public_gists: number
   followers: number
   following: number
   created_at: string
   updated_at: string
   access_token: string
}
