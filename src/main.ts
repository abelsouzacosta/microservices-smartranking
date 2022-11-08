import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Queues } from './common/enum/queue-names.enum';
import { RpcExceptionFilter } from './common/filters/rpc-exception.filter';
import { RABBITMQ_URL } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [RABBITMQ_URL],
        queue: Queues.PLAYERS,
      },
    },
  );

  app.useGlobalFilters(new RpcExceptionFilter());

  await app.listen();
}
bootstrap();
