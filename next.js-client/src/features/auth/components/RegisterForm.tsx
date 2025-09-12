"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useTheme } from "next-themes"
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

import { useRegisterMutation } from "../hooks"
import { RegisterSchema, TypeRegisterSchema } from "../schemas"

import { AuthWrapper } from "./AuthWrapper"

export function RegisterForm() {
   const { theme } = useTheme()
   const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

   const form = useForm<TypeRegisterSchema>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
         name: "",
         email: "",
         password: "",
         passwordRepeat: ""
      }
   })

   const { register, isLoadingRegister } = useRegisterMutation()

   const onSubmit = (values: TypeRegisterSchema) => {
      if (recaptchaValue) {
         register({ values, recaptcha: recaptchaValue })
      } else {
         toast.error("Please, verify reCAPTCHA!")
      }
   }

   return (
      <AuthWrapper
         heading="Register"
         description="To log in to the website enter your email and password."
         backButtonLabel="Have an account? Log in"
         backButtonHref="/auth/login"
         isShowSocial>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="grid gap-2 space-y-2">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                           <Input
                              placeholder="John"
                              disabled={isLoadingRegister}
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input
                              placeholder="john@example.com"
                              disabled={isLoadingRegister}
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
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                           <Input
                              placeholder="******"
                              disabled={isLoadingRegister}
                              type="password"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="passwordRepeat"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Repeat Password</FormLabel>
                        <FormControl>
                           <Input
                              placeholder="******"
                              disabled={isLoadingRegister}
                              type="password"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <div className="flex justify-center">
                  <ReCAPTCHA
                     sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
                     onChange={setRecaptchaValue}
                     theme={theme === "light" ? "light" : "dark"}
                  />
               </div>
               <Button type="submit" disabled={isLoadingRegister}>
                  Create account
               </Button>
            </form>
         </Form>
      </AuthWrapper>
   )
}
