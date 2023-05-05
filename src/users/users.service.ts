import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private readonly usersRepository: Repository<User>) { }


    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }
    async createUser(dto: CreateUserDto): Promise<User> {
        const user: User = await this.usersRepository.findOne({ where: { email: dto.email } });
        // if (user) {
        //     throw new HttpException(`Пользователь с ${dto.email} уже существует`, HttpStatus.CONFLICT);
        // }
        return await this.usersRepository.save(dto);
    }
    async deleteUser(dto: DeleteUserDto): Promise<User> {
        const user: User = await this.usersRepository.findOne({ where: { id: dto.id } });
        // if (!user) {
        //     throw new HttpException(`Пользователь с этим ID не существует`, HttpStatus.NOT_FOUND);
        // }
        return await this.usersRepository.remove(user);
    }
    async updateUser(updateUserDto: UpdateUserDto): Promise<User & UpdateUserDto> {
        const user = await this.usersRepository.findOne({ where: { id: updateUserDto.id } });
        // if (!user) {
        //     throw new HttpException(`Пользователь с ID ${updateUserDto.id} не найден`, HttpStatus.NOT_FOUND);
        // }
        const updatedUser = Object.assign(user, updateUserDto);
        return await this.usersRepository.save(updatedUser)
    }

    async getUserById(id: number): Promise<User | never> {
        const user = await this.usersRepository.findOne({ where: { id } });
        // if (!user) {
        //     throw new HttpException(`Пользователь с ID ${id} не найден`, HttpStatus.NOT_FOUND);
        // }
        return user;
    }
    async getUserByEmail(email: string): Promise<User> {
      const user = await this.usersRepository.findOne({ where: { email } });
      // if (!user) {
      //     throw new HttpException(`Пользователь ${email} не найден`, HttpStatus.NOT_FOUND);
      // }
      return user;
  }

}
