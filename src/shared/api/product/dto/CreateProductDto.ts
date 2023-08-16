import { ImageDto } from "../../dto/common";

export interface CreateProductRequestDto {
  title: string;
  disabled: boolean;
  available_sizes: Array<string>;
  amount: number;
  brand: string;
}

export interface CreateProductResponseDto {
  id: string;
  title: string;
  description: string;
  images: Array<ImageDto>;
  disabled: boolean;
  available_sizes: Array<string>;
  amount: number;
  brand: string;
}
