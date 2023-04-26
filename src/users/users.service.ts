import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private readonly usersRepository: Repository<User>,) { }


    async getUsers(){
        return await this.usersRepository.find();
    }
    async createUser(dto: CreateUserDto) : Promise<User | never> {
        return await this.usersRepository.save(dto);
    }
}
