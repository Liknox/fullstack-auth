import { z } from "zod"

export const LoginSchema = z.object({
   name: z.string().min(1, {
      error: "Type name"
   }),
   email: z.email({
      error: "Invalid email"
   }),
   password: z.string().min(6, {
      error: "Password should be minimum 6 symbols"
   })
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
