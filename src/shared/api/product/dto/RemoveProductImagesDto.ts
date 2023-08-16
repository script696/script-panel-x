import { ImageDto } from "../../dto/common";

export interface RemoveProductImageRequestDto {
  productId: string;
  imagesSources: Array<string>;
}

export interface RemoveProductImagesResponseDto {
  id: string;
  title: string;
  description: string;
  images: Array<ImageDto>;
  disabled: boolean;
  available_sizes: Array<string>;
  amount: number;
  brand: string;
}
