import type { NextConfig } from "next"

const nextConfig: NextConfig = {
   env: {
      APPLICATION_URL: process.env.APPLICATION_URL,
      GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "lh3.googleusercontent.com"
         }
      ]
   }
}

export default nextConfig
