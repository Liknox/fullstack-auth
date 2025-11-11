import { Metadata } from "next"
import { Suspense } from "react"

import { NewVerificationForm } from "@/features/auth/components"

import { Loading } from "@/shared/components/ui"

export const metadata: Metadata = {
   title: "Email Verification"
}

export default function NewVerificationPage() {
   return (
      <Suspense fallback={<Loading />}>
         <NewVerificationForm />
      </Suspense>
   )
}
