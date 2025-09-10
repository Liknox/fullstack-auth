import Link from "next/link"
import { PropsWithChildren } from "react"

import {
   Button,
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle
} from "@/shared/components/ui"

import { AutSocial } from "./AuthSocial"

interface AuthWrapperProps {
   heading: string
   description?: string
   backButtonLabel?: string
   backButtonHref?: string
   isShowSocial?: boolean
}

export function AuthWrapper({
   children,
   heading,
   description,
   backButtonLabel,
   backButtonHref,
   isShowSocial = false
}: PropsWithChildren<AuthWrapperProps>) {
   return (
      <Card className="w-[400px]">
         <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">{heading}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
         </CardHeader>
         <CardContent>
            {isShowSocial && <AutSocial />}
            {children}
         </CardContent>
         <CardFooter>
            {backButtonLabel && backButtonHref && (
               <Button variant="link" className="w-full font-normal">
                  <Link href={backButtonHref}>{backButtonLabel}</Link>
               </Button>
            )}
         </CardFooter>
      </Card>
   )
}
