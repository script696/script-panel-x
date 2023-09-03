import { ProductApi } from "shared/api/product/typedef";

export interface GetProductsRequestDto {
  page: number;
  rowsPerPage: number;
  botName: string;
}

export interface GetProductsResponseDto {
  products: Array<ProductApi>;
  total: number;
}
