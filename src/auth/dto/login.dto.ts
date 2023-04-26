import { ApiProperty } from '@nestjs/swagger';
import { Trim } from 'class-sanitizer';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Адрес электронной почты пользователя',
    example: 'user@example.com',
  })
  @Trim()
  @IsEmail()
  public readonly email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'password123',
  })
  @IsString()
  public readonly password: string;
}
