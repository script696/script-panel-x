import { ImageDto } from "../../typedef";

export interface AddProductImagesRequestDto {
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
