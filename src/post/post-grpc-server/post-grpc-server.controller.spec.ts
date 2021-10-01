import { Test, TestingModule } from '@nestjs/testing';
import { PostGrpcServerController } from './post-grpc-server.controller';

describe('PostGrpcServerController', () => {
  let controller: PostGrpcServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostGrpcServerController],
    }).compile();

    controller = module.get<PostGrpcServerController>(PostGrpcServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
