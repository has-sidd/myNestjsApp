import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.getUserByEmail(email);

    if (user && user.password === password) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
}
