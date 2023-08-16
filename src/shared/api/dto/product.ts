import { ImageDto } from "./common";

export interface ProductDto {
  id: string;
  images: Array<ImageDto>;
  disabled: boolean;
  title: string;
  description: string;
  size: string;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}
