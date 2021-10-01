import { Prisma } from '.prisma/client';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PostService } from '../post.service';

@Controller('post-grpc-server')
export class PostGrpcServerController {
  constructor(private postService: PostService) {}

  @GrpcMethod('PostService', 'Feed')
  async getPublishedPosts(data) {
    const posts = await this.postService.posts({
      where: { published: true },
    });

    return { posts };
  }
}
