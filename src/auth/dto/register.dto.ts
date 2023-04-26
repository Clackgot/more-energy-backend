import { ApiProperty } from '@nestjs/swagger';
import { Trim } from 'class-sanitizer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'Адрес электронной почты пользователя',
    example: 'user@example.com',
  })
  @Trim()
  @IsEmail()
  public readonly email: string;

  @ApiProperty({
    description: 'Пароль пользователя. Длина должна быть не менее 8 символов',
    example: 'password123',
  })
  @IsString()
  @MinLength(8)
  public readonly password: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  public readonly username: string;
}
