import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { CreatePlayerDto } from './domain/dto/create-player.dto';
import { UpdatePlayerDto } from './domain/dto/update-player.dto';
import { PlayerRepository } from './domain/repositories/player.repository';

@Injectable()
export class PlayersService {
  constructor(private readonly repository: PlayerRepository) {}

  async emailMustBeUnique(email: string) {
    const emailAlreadyTaken = await this.repository.findByEmail(email);

    if (emailAlreadyTaken) throw new RpcException(`email already taken`);
  }

  async create(data: CreatePlayerDto) {
    await this.emailMustBeUnique(data.email);

    return this.repository.create(data);
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
