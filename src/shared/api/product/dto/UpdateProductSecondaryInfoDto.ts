import { ImageDto } from "../../dto/common";

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
  available_sizes: Array<string>;
  amount: number;
  brand: string;
}
