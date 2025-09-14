import { api } from "@/shared/api"

import type { TypeResetPasswordSchema } from "../schemas"
import type { IUser } from "../types"

class PasswordRecoveryService {
   public async reset(body: TypeResetPasswordSchema, recaptcha?: string) {
      const headers = recaptcha ? { recaptcha } : undefined

      const response = await api.post<IUser>(
         "auth/password-recovery/reset",
         body,
         { headers }
      )

      return response
   }
}

export const passwordRecoveryService = new PasswordRecoveryService()
