import { ImageDto } from "../../dto/common";

export interface GetProductsRequestDto {
  page: number;
  rowsPerPage: number;
}

export interface GetProductsResponseDto {
  products: Array<{
    id: string;
    title: string;
    description: string;
    images: Array<ImageDto>;
    disabled: boolean;
    availableSizes: Array<string>;
    amount: number;
    brand: string;
  }>;
  total: number;
}
