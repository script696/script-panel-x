import { ImageDto } from "../../typedef";

export interface CreateProductRequestDto {
  title: string;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}

export interface CreateProductResponseDto {
  id: string;
  title: string;
  description: string;
  images: Array<ImageDto>;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}
