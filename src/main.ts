import * as dotenv from 'dotenv';
dotenv.config();
import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const appPort = process.env.APP_PORT;
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(appPort);
  console.log(`Listening on ${appPort}`);
}
bootstrap();
