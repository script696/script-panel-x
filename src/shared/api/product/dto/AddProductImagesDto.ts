import { ProductApi } from "shared/api/product/typedef";

export interface AddProductImagesRequestDto {
  productId: string;
  files: Array<File>;
}

export interface AddProductImagesResponseDto extends ProductApi {}
