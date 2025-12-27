import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SaleController } from './sale.controller';

@Module({
  imports: [
    // 👇 serve frontend
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    // 👇 auth module của bạn
    AuthModule,
  ],
  controllers: [AppController, SaleController],
  providers: [AppService],
})
export class AppModule {}
