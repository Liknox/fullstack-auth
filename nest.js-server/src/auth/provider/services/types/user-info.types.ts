export type TypeUserInfo = {
   id: string
   email: string
   picture: string
   name: string
   access_token?: string | null
   refresh_token?: string
   expires_at?: number
   provider: string
   providerAccountId: string
}
