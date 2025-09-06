import { Body, Heading, Link, Tailwind, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from "react"

interface IConfirmationTemplateProps {
   domain: string
   token: string
}

const ConfirmationTemplate = ({
   domain,
   token,
}: IConfirmationTemplateProps) => {
   const confirmLink = `${domain}/auth/new-verification?token=${token}`
   return (
      <Tailwind>
         <Html>
            <Body className="text-black">
               <Heading>Email Confirmation</Heading>
               <Text>Hi! To confirm your email, please, follow the link:</Text>
               <Link href={confirmLink}>Confirm email</Link>
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

export default ConfirmationTemplate
