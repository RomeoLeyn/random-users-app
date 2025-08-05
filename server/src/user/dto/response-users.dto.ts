import { UserDto } from './user.dto';

export class ResponseUsersDto {
  results: UserDto[];
  info: {
    results: number;
    page: number;
  };
}
