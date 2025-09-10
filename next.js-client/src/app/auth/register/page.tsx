import { Metadata } from "next"

import { RegisterForm } from "@/features/auth/components/RegisterForm"

export const metadata: Metadata = {
   title: "Create Account",
   description: "create account"
}

export default function RegisterPage() {
   return <RegisterForm />
}
