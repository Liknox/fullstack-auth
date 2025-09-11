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

import { LoginSchema, TypeLoginSchema } from "../schemas"

import { AuthWrapper } from "./AuthWrapper"

export function LoginForm() {
   const form = useForm<TypeLoginSchema>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
         name: "",
         email: "",
         password: ""
      }
   })

   const onSubmit = (values: TypeLoginSchema) => {
      console.log(values)
   }

   return (
      <AuthWrapper
         heading="Login"
         description="To log in to the website enter your email and password."
         backButtonLabel="Have no account? Sign up"
         backButtonHref="/auth/register"
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
               <Button type="submit">Log in account</Button>
            </form>
         </Form>
      </AuthWrapper>
   )
}
