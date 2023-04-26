import { Body, Controller, Inject, Post, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from './auth.service';
import { TokenDto } from './dto/token.dto';
import { User } from '../entities/user.entity'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @ApiOperation({ summary: 'Регистрация нового пользователя' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ status: 201, description: 'Пользователь успешно зарегистрирован', type: User })
  @ApiResponse({ status: 400, description: 'Некорректные данные для регистрации' })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
  async register(@Body() body: RegisterDto): Promise<User | never> {
    return this.service.register(body);
  }

  @ApiOperation({ summary: 'Авторизация пользователя' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Токен', type: TokenDto })
  @ApiResponse({ status: 401, description: 'Ошибка авторизации' })
  @Post('login')
  async login(@Body() body: LoginDto): Promise<TokenDto | never> {
    return this.service.login(body);
  }

  // @ApiOperation({ summary: 'Обновление токена доступа' })
  // @ApiBody({ description: 'Токен обновления', schema: { example: { user: {} } } })
  // @ApiResponse({ status: 200, description: 'Токены успешно обновлены', type: String })
  // @ApiResponse({ status: 401, description: 'Ошибка обновления токенов' })
  // //@UseGuards(JwtAuthGuard)
  // @Post('refresh')
  // async refresh(@Body() req: { user: User }): Promise<string> {
  //   const { user } = req;
  //   return this.service.refresh(user);
  // }
}
