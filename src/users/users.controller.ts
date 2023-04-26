import { Controller, Get, Inject, Post, Body, Delete, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
@Controller('users')
export class UsersController {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) { }
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }
    @Get(':id')
    getUser(@Param('id') id: number) {
        return this.usersService.getUser(id);
    }
    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto);
    }
    @Delete()
    deleteUser(@Body() dto: DeleteUserDto) {
        return this.usersService.deleteUser(dto);
    }
    @Put()
    updateUser(@Body() dto: UpdateUserDto) {
        return this.usersService.updateUser(dto);
    }

}
