import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from 'src/players/entities/player.entity';
import { IRepository } from '../../../common/interfaces/repository.interface';
import { CreatePlayerDto } from '../dto/create-player.dto';

export class PlayerRepository implements IRepository {
  constructor(
    @InjectModel(Player.name)
    private readonly model: Model<Player>,
  ) {}

  async create(data: CreatePlayerDto): Promise<Player> {
    return this.model.create({
      ...data,
    });
  }

  async findByEmail(email: string): Promise<boolean> {
    return this.model.findOne({
      email,
    })
      ? true
      : false;
  }
}
