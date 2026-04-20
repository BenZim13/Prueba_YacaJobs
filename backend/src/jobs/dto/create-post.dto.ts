import { IsNumber, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  descripcion_publi: string;

  @IsString()
  @IsNotEmpty()
  tipo_urgencia: string;

  @IsNumber()
  @IsNotEmpty()
  id_oficio: number;

  @IsNumber()
  @IsNotEmpty()
  id_cliente: number;
}
