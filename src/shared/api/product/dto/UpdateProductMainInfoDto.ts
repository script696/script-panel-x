import { ImageDto } from "../../dto/common";

export interface UpdateProductMainInfoRequestDto {
  productId: string;
  title: string;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}

export interface UpdateProductMainInfoResponseDto {
  id: string;
  title: string;
  description: string;
  images: Array<ImageDto>;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}
