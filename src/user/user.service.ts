import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'User list';
  }

  getUser(userId: number): string {
    return 'user returned: ' + userId;
  }

  setUser(payload: UpdateUserDto): string {
    return 'user set:' + JSON.stringify(payload);
  }

  updateUser(payload: UpdateUserDto, userId: number): string {
    console.log(payload);
    return 'updated user to: ' + JSON.stringify(payload) + ' at ID: ' + userId;
  }

  deleteUser(userId: number): string {
    return 'user deleted at ID: ' + userId;
  }
}
