import { Metadata } from "next"
import { Inter } from "next/font/google"

import { MainProvider } from "@/shared/providers"
import "@/shared/styles/globals.css"

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
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <MainProvider>
               <div className="relative flex min-h-screen flex-col">
                  {/* ThemeToggle */}
                  <div className="flex h-screen w-full items-center justify-center px-4">
                     {children}
                  </div>
               </div>
            </MainProvider>
         </body>
      </html>
   )
}
