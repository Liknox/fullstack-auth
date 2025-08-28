import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class LoginDto {
   @IsString({ message: "Email should be a string" })
   @IsEmail({}, { message: "Wrong email format" })
   @IsNotEmpty({ message: "Email is required" })
   email: string

   @IsString({ message: "Password should be a string" })
   @IsNotEmpty({ message: "Password is required" })
   @MinLength(6, { message: "Password must contain at least 6 characters" })
   password: string
}
