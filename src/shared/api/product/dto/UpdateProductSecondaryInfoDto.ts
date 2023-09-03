import { ProductApi } from "../typedef";

export interface UpdateProductSecondaryInfoRequestDto {
  productId: string;
  description: string;
}

export interface UpdateProductSecondaryInfoResponseDto extends ProductApi {}
