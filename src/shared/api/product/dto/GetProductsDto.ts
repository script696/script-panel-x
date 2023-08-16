import { ImageDto } from "../../dto/common";

export interface GetProductProductsRequestDto {
  page: number;
  rowsPerPage: number;
}

export interface GetProductProductsResponseDto {
  products: Array<{
    id: string;
    title: string;
    description: string;
    images: Array<ImageDto>;
    disabled: boolean;
    available_sizes: Array<string>;
    amount: number;
    brand: string;
  }>;
}
