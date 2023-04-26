import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private readonly usersRepository: Repository<User>,) { }


    async getUsers(): Promise<User[] | never> {
        return await this.usersRepository.find();
    }
    async createUser(dto: CreateUserDto): Promise<User | never> {
        let user: User = await this.usersRepository.findOne({ where: { email: dto.email } });
        if (user) {
            throw new HttpException(`Пользователь с ${dto.email} уже существует`, HttpStatus.CONFLICT);
        }
        return await this.usersRepository.save(dto);
    }
    async deleteUser(dto: DeleteUserDto): Promise<User | never> {
        let user: User = await this.usersRepository.findOne({ where: { id: dto.id } });
        if (!user) {
            throw new HttpException(`Пользователь с этим ID не существует`, HttpStatus.NOT_FOUND);
        }
        return await this.usersRepository.remove(user);
    }
}
