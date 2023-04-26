import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
@Controller('users')
export class UsersController {
    constructor(@Inject(UsersService) private readonly usersService : UsersService){}
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }
    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto);
    }
}
