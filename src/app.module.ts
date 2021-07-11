import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MenuModule,
    MongooseModule.forRoot(
      'mongodb+srv://user:Enthusiasmh2o@cluster0.dsc96.mongodb.net/menu_creator?retryWrites=true&w=majority&ssl=true',
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
