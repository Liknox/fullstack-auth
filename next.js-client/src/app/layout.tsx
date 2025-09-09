import { Metadata } from "next"
import { Inter } from "next/font/google"

import { MainProvider } from "@/shared/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: {
      absolute: "Fullstack Auth",
      template: "%s | Authorization"
   },
   description:
      "Fullstack Authorization using Node, Nest.js, Postgresql (db), Redis (sessions), Prisma (orm), Docker (compose), Oauth2 (google), 2FA (email confirmation), captcha (cloudflare). Frontend - Next.js (ssr), Tailwind (ui), Radix-ui, Zod (validation), React-hook-form."
}

export default function RootLayout({
   children
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <MainProvider>{children}</MainProvider>
         </body>
      </html>
   )
}
