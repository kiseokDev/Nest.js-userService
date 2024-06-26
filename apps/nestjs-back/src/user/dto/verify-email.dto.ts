import { IsOptional, IsString } from 'class-validator';

export class VerifyEmailDto {
  @IsOptional()
  @IsString()
  signupVerifyToken: string;
}
