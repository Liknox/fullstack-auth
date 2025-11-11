import { Metadata } from "next"

import { LoginForm } from "@/features/auth/components"

export const metadata: Metadata = {
   title: "Log in Account",
   description: "log in account"
}

export default function LoginPage() {
   return <LoginForm />
}
