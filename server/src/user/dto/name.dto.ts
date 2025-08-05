import { IsString, MaxLength, MinLength } from 'class-validator';

export class NameDto {
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  title: string;

  @IsString()
  @MinLength(1)
  @MaxLength(30)
  first: string;

  @IsString()
  @MinLength(1)
  @MaxLength(30)
  last: string;
}
