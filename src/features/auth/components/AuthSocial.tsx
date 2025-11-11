"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { FaGithub, FaGoogle } from "react-icons/fa"
import { toast } from "sonner"

import { Button } from "@/shared/components/ui"

import { authService } from "../services"
import type { ProvidersType } from "../types"

export function AutSocial() {
   const router = useRouter()

   const { mutateAsync } = useMutation({
      mutationKey: ["oauth by provider"],
      mutationFn: async (provider: ProvidersType) =>
         await authService.oauthByProvider(provider)
   })

   const onClick = async (provider: ProvidersType) => {
      if (provider === "github") {
         if (process.env.GITHUB_CLIENT_ID === undefined) {
            toast.error("GITHUB_CLIENT_ID env wasn't provided!")
            return
         }
      } else if (provider === "google") {
         if (process.env.GOOGLE_CLIENT_ID === undefined) {
            toast.error("GOOGLE_CLIENT_ID env wasn't provided!")
            return
         }
      }

      const response = await mutateAsync(provider)

      if (response) {
         router.push(response.url)
      }
   }

   return (
      <>
         <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => onClick("google")} variant="outline">
               <FaGoogle className="mr-2 size-4" />
               Google
            </Button>
            <Button onClick={() => onClick("github")} variant="outline">
               <FaGithub className="mr-2 size-4" />
               Github
            </Button>
         </div>
         <div className="relative mb-2 space-y-4">
            <div className="absolute inset-0 flex items-center">
               <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
               <span className="bg-background px-2 text-muted-foreground">
                  or
               </span>
            </div>
         </div>
      </>
   )
}
