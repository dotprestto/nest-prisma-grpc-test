import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaServiceService } from './prisma-service/prisma-service.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaServiceService, UserService, PostService],
})
export class AppModule {}
