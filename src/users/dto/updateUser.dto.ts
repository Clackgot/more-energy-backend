import { Trim } from 'class-sanitizer';
import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
    readonly id: number;
    @Trim()
    @IsEmail()
    readonly email?: string;
    @IsString()
    readonly password?: string;
    @IsString()
    readonly username?: string;
}
