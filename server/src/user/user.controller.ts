import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: UserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':page')
  findAll(@Param('page') page: number) {
    return this.userService.findAll(page);
  }

  @Delete('/remove/:id')
  remove(@Param('id') uuid: string) {
    return this.userService.remove(uuid);
  }
}
