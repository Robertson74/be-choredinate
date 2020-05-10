import { Module } from '@nestjs/common';
import { ChoresController } from './chores.controller';
import { Chore } from './chores.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChoreService } from './chore.service';

@Module({
  controllers: [ChoresController],
  imports: [
    TypeOrmModule.forFeature([Chore])
  ],
  providers: [ChoreService],
})
export class ChoresModule {}
