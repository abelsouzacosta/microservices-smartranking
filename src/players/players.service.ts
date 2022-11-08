import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { CreatePlayerDto } from './domain/dto/create-player.dto';
import { UpdatePlayerDto } from './domain/dto/update-player.dto';
import { PlayerRepository } from './domain/repositories/player.repository';

@Injectable()
export class PlayersService {
  constructor(private readonly repository: PlayerRepository) {}

  async thorwsExceptionIfEmailAlreadyTaken(email: string) {
    const emailAlreadyTaken = await this.repository.findByEmail(email);

    if (emailAlreadyTaken)
      throw new RpcException(`Email ${email} is already taken`);
  }

  create(data: CreatePlayerDto) {
    this.thorwsExceptionIfEmailAlreadyTaken(data.email);

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
