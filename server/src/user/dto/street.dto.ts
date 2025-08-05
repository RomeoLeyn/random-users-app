import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class StreetDto {
  @IsInt()
  number: number;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name: string;
}
