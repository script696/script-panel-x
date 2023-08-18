import { ImageDto } from "../../dto/common";

export interface AddProductImageRequestDto {
  shopId: string;
  productId: string;
}

export interface AddProductImagesResponseDto {
  id: string;
  title: string;
  description: string;
  images: Array<ImageDto>;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}