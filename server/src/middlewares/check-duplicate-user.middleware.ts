import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class CheckDuplicateUserMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: (error?: any) => void) {
    const uuid = req.body?.login?.uuid;

    if (!uuid) {
      throw new BadRequestException();
    }

    const filePath = path.join(__dirname, '..', 'user', 'data', 'users.json');

    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const users = JSON.parse(fileContent);

      const exists = users.some((user: UserDto) => user.login?.uuid === uuid);

      if (exists) {
        throw new BadRequestException('User already exists');
      }

      next();
    } catch (error) {
      console.error('Error reading users.json:', error);
      throw new BadRequestException('Internal server error');
    }
  }
}
