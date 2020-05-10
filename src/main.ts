import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appPort = process.env.APP_PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(appPort);
  console.log(`Listening on ${appPort}`);
}
bootstrap();
