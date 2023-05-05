import { Trim } from 'class-sanitizer';
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Адрес электронной почты пользователя',
    example: 'john@example.com',
  })
  @Trim()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'p@ssw0rd',
  })
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'johndoe',
  })
  @IsString()
  readonly username: string;

  @IsString()
  readonly refeshToken?: string;
}
