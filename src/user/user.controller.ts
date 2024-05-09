import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): string {
    return this.userService.getUsers();
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return this.userService.getUser(params.userId);
  }

  @Post()
  setUser(@Req() req: Request): string {
    return this.userService.setUser(req.body.data);
  }

  @Patch('/:userId')
  updateUser(@Req() req: Request, @Param() params: { userId: number }) {
    return this.userService.updateUser(req.body.data, params.userId);
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return this.userService.deleteUser(params.userId);
  }
}
