import { Controller, Get, Inject, Post, Body, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
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
    @Delete()
    deleteUser(@Body() dto: DeleteUserDto) {
        return this.usersService.deleteUser(dto);
    }
}
