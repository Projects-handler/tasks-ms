import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './common/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = envs.port ?? 3002;
  const logger = new Logger('tasks-ms');
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  logger.log(`Tasks microservice running on port ${PORT}`);
}
bootstrap();
