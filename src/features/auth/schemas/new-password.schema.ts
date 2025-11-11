import { z } from "zod"

export const NewPasswordSchema = z.object({
   password: z.string().min(6, {
      error: "Password should be minimum 6 symbols"
   })
})

export type TypeNewPasswordSchema = z.infer<typeof NewPasswordSchema>
