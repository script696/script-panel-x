import { ImageDto } from "../../dto/common";

export interface UpdateProductMainInfoRequestDto {
  productId: string;
  title: string;
  disabled: boolean;
  available_sizes: Array<string>;
  amount: number;
  brand: string;
}

export interface UpdateProductMainInfoResponseDto {
  id: string;
  title: string;
  description: string;
  images: Array<ImageDto>;
  disabled: boolean;
  available_sizes: Array<string>;
  amount: number;
  brand: string;
}
