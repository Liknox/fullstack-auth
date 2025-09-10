import { AuthWrapper } from "./AuthWrapper"

export function RegisterForm() {
   return (
      <AuthWrapper
         heading="Register"
         description="To log in to the website enter your email and password."
         backButtonLabel="Have an account? Log in"
         backButtonHref="/auth/login"
         isShowSocial>
         RegisterForm
      </AuthWrapper>
   )
}
