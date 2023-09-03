import { ProductApi } from "shared/api/product/typedef";

export interface CreateProductRequestDto {
  title: string;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}

export interface CreateProductResponseDto extends ProductApi {}
