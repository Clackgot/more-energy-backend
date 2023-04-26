import { Trim } from 'class-sanitizer';
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @Trim()
    @IsEmail()
    @ApiProperty({ description: 'Email пользователя', format: 'email' })
    readonly email: string;

    @IsString()
    @ApiProperty({ description: ' Пароль пользователя' })
    readonly password: string;

    @IsString()
    @ApiProperty({ description: 'Имя пользователя' })
    readonly username: string;
}
