import { TypeBaseProviderOptions } from "../types/base-provider.options.types"

type TypeProviderLinks = Omit<
   TypeBaseProviderOptions,
   "client_id" | "client_secret" | "scopes"
>

export const GoogleLinks: TypeProviderLinks = {
   name: "google",
   authorize_url: "https://accounts.google.com/o/oauth2/v2/auth",
   access_url: "https://oauth2.googleapis.com/token",
   profile_url: "https://www.googleapis.com/oauth2/v3/userinfo",
}

export const GithubLinks: TypeProviderLinks = {
   name: "github",
   authorize_url: "https://github.com/login/oauth/authorize",
   access_url: "https://github.com/login/oauth/access_token",
   profile_url: "https://api.github.com/user",
}
