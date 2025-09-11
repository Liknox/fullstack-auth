"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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

import { RegisterSchema, TypeRegisterSchema } from "../schemas"

import { AuthWrapper } from "./AuthWrapper"

export function RegisterForm() {
   const form = useForm<TypeRegisterSchema>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
         name: "",
         email: "",
         password: "",
         passwordRepeat: ""
      }
   })

   const onSubmit = (values: TypeRegisterSchema) => {
      console.log(values)
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
                           <Input placeholder="John" {...field} />
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
                              type="password"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit">Create account</Button>
            </form>
         </Form>
      </AuthWrapper>
   )
}
