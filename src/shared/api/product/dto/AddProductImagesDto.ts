import { ImageDto } from "../../dto/common";

export interface AddProductImagesRequestDto {
  shopId: string;
  productId: string;
  files: Array<File>;
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
