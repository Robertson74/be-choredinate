import { ChoreService } from './chore.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Chore } from './chores.model';

@Controller('chores')
export class ChoresController {

  constructor(
    private readonly choreService: ChoreService,
  ) {}

  @Get()
  async getAllChores() {
    return await this.choreService.getAllChores();
  }

  @Post()
  async saveChores(
    @Body() chores: Array<Chore>
  ) {
    return await this.choreService.save(chores);
  }
}
