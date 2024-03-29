import { ProductApi } from "shared/api/product/typedef";

export interface UpdateProductMainInfoRequestDto {
  productId: string;
  title: string;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  price: number;
  discount: number;
  brand: string;
}

export interface UpdateProductMainInfoResponseDto extends ProductApi {}
