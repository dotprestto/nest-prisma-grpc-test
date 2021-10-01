import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma-service/prisma-service.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { PostGrpcServerController } from './post/post-grpc-server/post-grpc-server.controller';

@Module({
  imports: [],
  controllers: [AppController, PostGrpcServerController],
  providers: [AppService, PrismaService, UserService, PostService],
})
export class AppModule {}
