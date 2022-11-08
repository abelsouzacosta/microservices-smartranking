import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './domain/dto/create-player.dto';
import { UpdatePlayerDto } from './domain/dto/update-player.dto';

@Injectable()
export class PlayersService {
  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll() {
    return `This action returns all players`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: string, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
