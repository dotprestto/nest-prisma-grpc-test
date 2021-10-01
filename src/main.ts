import { ServerCredentials } from '@grpc/grpc-js';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
// import { PrismaService } from './prisma-service/prisma-service.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:5051',
      package: 'post',
      credentials: ServerCredentials.createInsecure(),
      protoPath: join(__dirname, 'post', 'proto', 'post.proto'),
    },
  });
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.GRPC,
  //     options: {
  //       url: '0.0.0.0:50051',
  //       package: 'post',
  //       credentials: ServerCredentials.createInsecure(),
  //       protoPath: join(__dirname, 'post', 'proto', 'post.proto'),
  //     },
  //   },
  // );
  // const prismaService: PrismaService = app.get(PrismaService);
  // await app.listen();

  console.log(`Application is running`);
  // prismaService.enableShutdownHooks(app);
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
