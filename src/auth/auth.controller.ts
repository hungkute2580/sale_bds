import { Body, Controller, Post, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  @Post('login')
  login(@Body() body: LoginDto) {
    return {
      message: 'Login OK',
      token: 'fake-jwt-token',
    };
  }

  @Post('logout')
  logout(@Headers('authorization') auth: string) {
    return {
      message: 'Logout OK',
    };
  }

}
