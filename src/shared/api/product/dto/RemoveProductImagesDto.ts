import { ProductApi } from "shared/api/product/typedef";

export interface RemoveProductImageRequestDto {
  productId: string;
  imagesSources: Array<string>;
}

export interface RemoveProductImagesResponseDto extends ProductApi {}
