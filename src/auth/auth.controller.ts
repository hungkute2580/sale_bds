import { Body, Controller, Post, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/dto/login.dto';
import { RegisterDto } from 'src/dto/register.dto';
import { ForgotPasswordDto } from 'src/dto/forgot-password.dto';

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

  @Post('register')
  register(@Body() body: RegisterDto) {
    return {
      message: 'Register OK',
      email: body.email,
    };
  }

  @Post('forgot-pass')
  forgotPassword(@Body() body: ForgotPasswordDto) {
    return {
      message: 'Forgot Password OK',
      email: body.email,
    };
  }
}
