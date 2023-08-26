import { ImageDto } from "../../typedef";

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
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}
