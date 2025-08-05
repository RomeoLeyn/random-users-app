import { BadRequestException, Injectable } from '@nestjs/common';
import { ResponseUsersDto } from './dto/response-users.dto';
import * as fs from 'fs';
import * as path from 'path';
import { UserDto } from './dto/user.dto';
import { LIMIT_USER_LOAD } from 'src/constants/constants';

@Injectable()
export class UserService {
  private readonly filePath = path.resolve(__dirname, 'data', 'users.json');

  constructor() {
    if (!fs.existsSync(this.filePath)) {
      fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
      fs.writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  private readUsers(): UserDto[] {
    const raw = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(raw);
  }

  private writeUsers(users: UserDto[]) {
    fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2));
  }

  private readUsersPaginated(page?: number): UserDto[] {
    if (!page || page < 1) throw new BadRequestException('Page must be > 0');

    const raw = fs.readFileSync(this.filePath, 'utf-8');
    const allUsers = JSON.parse(raw);
    const start = (page - 1) * LIMIT_USER_LOAD;
    const end = start + LIMIT_USER_LOAD;
    return allUsers.slice(start, end);
  }

  create(createUserDto: UserDto) {
    const users = this.readUsers();
    if (users.find((u) => u.login?.uuid === createUserDto.login?.uuid)) {
      throw new BadRequestException('This user has already been added');
    }
    users.push(createUserDto);
    this.writeUsers(users);
    return createUserDto;
  }

  remove(uuid: string): boolean {
    const users = this.readUsers();
    const initialLength = users.length;
    const filtered = users.filter((user) => user.login?.uuid !== uuid);
    if (filtered.length === initialLength) {
      return false;
    }
    fs.writeFileSync(this.filePath, JSON.stringify(filtered, null, 2));
    return true;
  }

  findAll(page: number): ResponseUsersDto {
    const users = this.readUsersPaginated(page);

    return {
      results: users,
      info: {
        results: users.length,
        page,
      },
    };
  }
}
