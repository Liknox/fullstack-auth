import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { type Dispatch, type SetStateAction } from "react"
import { toast } from "sonner"

import { toastMessageHandler } from "@/shared/utils"

import { type TypeLoginSchema } from "../schemas"
import { authService } from "../services"

export function useLoginMutation(
   setIsShowTwoFactor: Dispatch<SetStateAction<boolean>>
) {
   const router = useRouter()

   const { mutate: login, isPending: isLoadingLogin } = useMutation({
      mutationKey: ["login user"],
      mutationFn: ({
         values,
         recaptcha
      }: {
         values: TypeLoginSchema
         recaptcha?: string
      }) => authService.login(values, recaptcha),
      onSuccess: (data: any) => {
         if (data.message) {
            toastMessageHandler(data)
            setIsShowTwoFactor(true)
         } else {
            toast.success("Successful Login")
            router.push("/dashboard/settings")
         }
      },
      onError: error => {
         toastMessageHandler(error)
      }
   })

   return { login, isLoadingLogin }
}
