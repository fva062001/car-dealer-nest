import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsUUID('4')
  @IsString()
  @IsOptional()
  readonly id?: string;
}
