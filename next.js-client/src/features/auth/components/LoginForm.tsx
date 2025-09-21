"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import {
   Button,
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
   Input
} from "@/shared/components/ui"

import { useLoginMutation } from "../hooks"
import { LoginSchema, type TypeLoginSchema } from "../schemas"

import { AuthWrapper } from "./AuthWrapper"

export function LoginForm() {
   const { theme } = useTheme()
   const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
   const [isShowTwoFactor, setIsShowTwoFactor] = useState<boolean>(false)

   const form = useForm<TypeLoginSchema>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
         email: "",
         password: ""
      }
   })

   const { login, isLoadingLogin } = useLoginMutation(setIsShowTwoFactor)

   const onSubmit = (values: TypeLoginSchema) => {
      if (recaptchaValue) {
         login({ values, recaptcha: recaptchaValue })
      } else {
         toast.error("Please, verify reCAPTCHA!")
      }
   }

   return (
      <AuthWrapper
         heading="Login"
         description="To log in to the website enter your email and password."
         backButtonLabel="Don't have an account? Sign up"
         backButtonHref="/auth/register"
         isShowSocial>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="grid gap-2 space-y-2">
               {isShowTwoFactor && (
                  <>
                     <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Code</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="123456"
                                    disabled={isLoadingLogin}
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </>
               )}
               {!isShowTwoFactor && (
                  <>
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="john@example.com"
                                    disabled={isLoadingLogin}
                                    type="email"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                           <FormItem>
                              <div className="flex items-center justify-between">
                                 <FormLabel>Password</FormLabel>
                                 <Link
                                    href="/auth/reset-password"
                                    className="ml-auto inline-block text-sm underline">
                                    Forgot password?
                                 </Link>
                              </div>
                              <FormControl>
                                 <Input
                                    placeholder="******"
                                    disabled={isLoadingLogin}
                                    type="password"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </>
               )}
               <div className="flex justify-center">
                  <ReCAPTCHA
                     sitekey={
                        (process.env.GOOGLE_RECAPTCHA_SITE_KEY as string) || "blank"
                     }
                     onChange={setRecaptchaValue}
                     theme={theme === "light" ? "light" : "dark"}
                     hidden={!process.env.GOOGLE_RECAPTCHA_SITE_KEY}
                  />
               </div>
               <Button type="submit" disabled={isLoadingLogin}>
                  Log in account
               </Button>
            </form>
         </Form>
      </AuthWrapper>
   )
}
