import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(payload: LoginDto): Promise<User | null> {
    const user = await this.userService.getUserByEmail(payload.email);

    if (user?.password !== payload.password) {
      throw new UnauthorizedException();
    }

    const { ...result } = user;
    return result;
  }
}
