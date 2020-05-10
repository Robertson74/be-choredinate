import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Chore } from './chores.model';
import { Repository } from 'typeorm';

@Injectable()
export class ChoreService {
  constructor(
    @InjectRepository(Chore) private readonly repo: Repository<Chore>,
  ) {}

  async getAllChores() {
    return await this.repo.find();
  }
}
