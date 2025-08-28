import {
   IsEmail,
   IsNotEmpty,
   IsString,
   MinLength,
   Validate,
} from "class-validator"

import { IsPasswordsMatchingConstraint } from "@/libs/common/decorators/is-passwords-matching-constraint.decorator"

export class RegisterDto {
   @IsString({ message: "Name should be a string" })
   @IsNotEmpty({ message: "Name is required" })
   name: string

   @IsString({ message: "Email should be a string" })
   @IsEmail({}, { message: "Wrong email format" })
   @IsNotEmpty({ message: "Email is required" })
   email: string

   @IsString({ message: "Password should be a string" })
   @IsNotEmpty({ message: "Password is required" })
   @MinLength(6, { message: "Password must contain at least 6 characters" })
   password: string

   @IsString({ message: "Password repeat should be a string" })
   @IsNotEmpty({ message: "Password repeat is required" })
   @MinLength(6, {
      message: "Password repeat must contain at least 6 characters",
   })
   @Validate(IsPasswordsMatchingConstraint, {
      message: "Passwords do not match",
   })
   passwordRepeat: string
}
