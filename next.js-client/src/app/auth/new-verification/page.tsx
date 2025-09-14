import { Metadata } from "next"

import { NewVerificationForm } from "@/features/auth/components"

export const metadata: Metadata = {
   title: "Email Verification"
}

export default function NewVerificationPage() {
   return <NewVerificationForm />
}
