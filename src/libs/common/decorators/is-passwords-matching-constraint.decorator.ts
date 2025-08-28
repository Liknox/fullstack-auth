import { RegisterDto } from "@/auth/dto/register.dto"
import {
   ValidationArguments,
   ValidatorConstraint,
   ValidatorConstraintInterface,
} from "class-validator"

@ValidatorConstraint({ name: "isPasswordsMatching", async: false })
export class IsPasswordsMatchingConstraint
   implements ValidatorConstraintInterface
{
   public validate(passwordRepeat: string, args: ValidationArguments) {
      const obj = args.object as RegisterDto
      return obj.password === passwordRepeat
   }

   public defaultMessage(): string {
      return "Passwords do not match"
   }
}
