import { ImageDto } from "../../typedef";

export interface UpdateProductSecondaryInfoRequestDto {
  productId: string;
  description: string;
}

export interface UpdateProductSecondaryInfoResponseDto {
  id: string;
  title: string;
  description: string;
  images: Array<ImageDto>;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}
