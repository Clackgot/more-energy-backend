import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, description: 'Успешный ответ', type: [CreateUserDto] })
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @ApiOperation({ summary: 'Получить пользователя по ID' })
  @ApiResponse({ status: 200, description: 'Успешный ответ', type: CreateUserDto })
  @ApiResponse({ status: 404, description: 'Пользователь не найден' })
  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(id);
  }

  @ApiOperation({ summary: 'Создать пользователя' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Пользователь успешно создан', type: CreateUserDto })
  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @ApiOperation({ summary: 'Удалить пользователя по ID' })
  @ApiBody({ type: DeleteUserDto })
  @ApiResponse({ status: 200, description: 'Пользователь успешно удален' })
  @ApiResponse({ status: 404, description: 'Пользователь не найден' })
  @Delete()
  deleteUser(@Body() dto: DeleteUserDto) {
    return this.usersService.deleteUser(dto);
  }

  @ApiOperation({ summary: 'Обновить данные пользователя' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Пользователь успешно обновлен', type: CreateUserDto })
  @ApiResponse({ status: 404, description: 'Пользователь не найден' })
  @Put()
  updateUser(@Body() dto: UpdateUserDto) {
    return this.usersService.updateUser(dto);
  }
}
