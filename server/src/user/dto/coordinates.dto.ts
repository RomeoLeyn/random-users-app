import { IsString } from 'class-validator';

export class CoordinatesDto {
  @IsString()
  latitude: string;

  @IsString()
  longitude: string;
}
