import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';
import { CoordinatesDto } from './coordinates.dto';
import { StreetDto } from './street.dto';
import { Type } from 'class-transformer';

export class LocationDto {
  @Type(() => StreetDto)
  street: StreetDto;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  city: string;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  state: string;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  country: string;

  @IsInt()
  @MinLength(1)
  @MaxLength(30)
  postcode: number;

  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;
}
