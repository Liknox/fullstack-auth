import { Metadata } from "next"

import { ResetPasswordForm } from "@/features/auth/components"

export const metadata: Metadata = {
   title: "Reset Password"
}

export default function ResetPasswordPage() {
   return <ResetPasswordForm />
}
