import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import { ToggleTheme } from "@/shared/components/ui"
import { MainProvider } from "@/shared/providers"
import "@/shared/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadataBase = new URL((process.env.APPLICATION_URL as string) || "http://localhost:3000")

export const metadata: Metadata = {
   title: { absolute: "Fullstack Auth", template: "%s | Authorization" },
   description:
      "Fullstack Authorization using Nest.js (Node Framework), Postgresql (DB), Redis (Sessions), Prisma (ORM), Docker Compose, Oauth2 (Google | Github), 2FA (Email Verification), Google Captcha. Frontend - Next.js, Tailwind, ShadCN, Zod, React-hook-form.",
   icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
   metadataBase: metadataBase,
   openGraph: {
      title: "Fullstack Auth",
      description:
         "Secure fullstack authorization with Next.js, Nest.js, OAuth2, 2FA, and more.",
      url: "https://github.com/Liknox/fullstack-auth",
      siteName: "Fullstack Auth",
      images: [
         {
            url: "/favicon.ico", // Add a 1200x630px image in your public folder
            width: 128,
            height: 128,
            alt: "Fullstack Auth Preview"
         }
      ],
      locale: "en_US",
      type: "website"
   },
   twitter: {
      card: "summary_large_image",
      title: "Fullstack Auth",
      description: "Secure authorization with Next.js and Nest.js.",
      images: ["/favicon.ico"]
   },
   keywords: [
      "fullstack authorization",
      "password-recovery",
      "Next.js",
      "Nest.js",
      "OAuth2",
      "Typescript",
      "2FA",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "Docker",
      "Tailwind CSS",
      "ShadCN",
      "Zod",
      "React Hook Form"
   ],
   robots: { index: true, follow: true },
   manifest: "/manifest.json",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff", // You can also use an array for light/dark mode, e.g.:
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  //   { media: "(prefers-color-scheme: dark)", color: "#000000" },
  // ],
};

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <MainProvider>
               <div className="relative flex min-h-screen flex-col">
                  <ToggleTheme />
                  <div className="flex h-screen w-full items-center justify-center px-4">
                     {children}
                  </div>
               </div>
            </MainProvider>
         </body>
      </html>
   )
}
