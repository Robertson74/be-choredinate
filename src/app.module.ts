import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChoresModule } from './chores/chores.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ChoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
