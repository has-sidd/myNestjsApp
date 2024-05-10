import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[] | null> {
    return this.userRepository.find();
  }

  getUser(userId: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id: userId });
  }

  getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  createUser(payload: UpdateUserDto) {
    return this.userRepository.save(payload);
  }

  updateUser(payload: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, payload);
  }

  deleteUser(userId: number) {
    return this.userRepository.delete(userId);
  }
}
