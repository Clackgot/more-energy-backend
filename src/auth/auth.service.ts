import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthHelper } from './auth.helper';
import { User } from '../entities/user.entity'
import { TokenDto } from './dto/token.dto';


@Injectable()
export class AuthService {
  // @InjectRepository(User)
  // private readonly repository: Repository<User>;

  // @Inject(AuthHelper)
  // private readonly helper: AuthHelper;

  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly helper: AuthHelper
  ) { }

  public async register(body: RegisterDto): Promise<User | never> {
    const { username, email, password }: RegisterDto = body;
    let user: User = await this.repository.findOne({ where: { email } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    user = new User();

    user.username = username;
    user.email = email;
    user.password = this.helper.encodePassword(password);

    return this.repository.save(user);
  }

  public async login(body: LoginDto): Promise<TokenDto | never> {
    const { email, password }: LoginDto = body;
    const user: User = await this.repository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('Пользователь с таким email не найден', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid: boolean = this.helper.isPasswordValid(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('Такой пользователь не найден', HttpStatus.NOT_FOUND);
    }

    this.repository.update(user.id, { lastLoginAt: new Date() });

    return { token: this.helper.generateToken(user) } as TokenDto;
  }

  public async refresh(user: User): Promise<string> {
    this.repository.update(user.id, { lastLoginAt: new Date() });
    return this.helper.generateToken(user);
  }
}
