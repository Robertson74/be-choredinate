import { Controller, Get } from '@nestjs/common';
import { ChoreService } from './chore.service';

@Controller('chores')
export class ChoresController {

  constructor(
    private readonly choreService: ChoreService,
  ) {}

  @Get()
  async getAllChores() {
    return await this.choreService.getAllChores();
  }
}
