import { Body, Heading, Link, Tailwind, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from "react"

interface IResetPasswordTemplateProps {
   domain: string
   token: string
}

const ResetPasswordTemplate = ({
   domain,
   token,
}: IResetPasswordTemplateProps) => {
   const resetLink = `${domain}/auth/new-password?token=${token}`
   return (
      <Tailwind>
         <Html>
            <Body className="text-black">
               <Heading>Reset Password</Heading>
               <Text>Hi! To reset your password, please, follow the link:</Text>
               <Link href={resetLink}>Reset password</Link>
               <Text>
                  This link will expire in 1 hour. If you haven't asked for
                  confirmation, you can ignore this letter.
               </Text>
               <Text>Thank you for using our service!</Text>
            </Body>
         </Html>
      </Tailwind>
   )
}

export default ResetPasswordTemplate
