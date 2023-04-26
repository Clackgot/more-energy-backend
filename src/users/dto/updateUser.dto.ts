import { Trim } from 'class-sanitizer';
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty({
    description: 'Адрес электронной почты пользователя',
    required: false,
    example: 'john@example.com',
  })
  @Trim()
  @IsEmail()
  readonly email?: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: false,
    example: 'p@ssw0rd',
  })
  @IsString()
  readonly password?: string;

  @ApiProperty({
    description: 'Имя пользователя',
    required: false,
    example: 'johndoe',
  })
  @IsString()
  readonly username?: string;
}
