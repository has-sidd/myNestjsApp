import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'User list';
  }

  getUser(userId: number): string {
    return 'user returned: ' + userId;
  }

  setUser(data: string): string {
    return 'user set:' + data;
  }

  updateUser(data: string, userId: number): string {
    return 'updated user to: ' + data + ' at ID: ' + userId;
  }

  deleteUser(userId: number): string {
    return 'user deleted at ID: ' + userId;
  }
}
