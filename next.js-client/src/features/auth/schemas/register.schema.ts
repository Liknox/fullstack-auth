import { z } from "zod"

export const RegisterSchema = z
   .object({
      name: z.string().min(1, {
         error: "Type name"
      }),
      email: z.email({
         error: "Invalid email"
      }),
      password: z.string().min(6, {
         error: "Password should be minimum 6 symbols"
      }),
      passwordRepeat: z.string().min(6, {
         error: "Password should be minimum 6 symbols"
      })
   })
   .refine(data => data.password === data.passwordRepeat, {
      error: "Passwords do not match",
      path: ["passwordRepeat"]
   })

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>
