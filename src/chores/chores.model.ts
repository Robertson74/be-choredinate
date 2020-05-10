import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('chore')
export class Chore {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'description' })
  description: string;

  @Column('int', { name: 'list_position' })
  listPosition: number;
}
