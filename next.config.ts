import type { NextConfig } from "next"

const nextConfig: NextConfig = {
   env: {
      APPLICATION_URL: process.env.APPLICATION_URL,
      GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
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
