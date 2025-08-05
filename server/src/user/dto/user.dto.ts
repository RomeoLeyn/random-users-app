import { LoginDto } from './login.dto';
import { NameDto } from './name.dto';
import { LocationDto } from './location.dto';
import { PictureDto } from './picture.dto';
import { Type } from 'class-transformer';

export class UserDto {
  @Type(() => LoginDto)
  login?: LoginDto;

  gender: string;

  @Type(() => NameDto)
  name: NameDto;

  @Type(() => LocationDto)
  location: LocationDto;
  email: string;

  @Type(() => PictureDto)
  picture: PictureDto;
}
