import { z } from "zod"

export const SettingsSchema = z.object({
   name: z.string().min(1, {
      error: "Type name"
   }),
   email: z.email({
      error: "Invalid email"
   }),
   isTwoFactorEnabled: z.boolean()
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>
