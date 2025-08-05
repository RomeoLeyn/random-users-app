import { IsString } from 'class-validator';

export class PictureDto {
  @IsString()
  large: string;

  @IsString()
  medium: string;

  @IsString()
  thumbnail: string;
}
