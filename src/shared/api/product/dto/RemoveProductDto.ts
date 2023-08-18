export interface RemoveProductRequestDto {
  shopId: string;
  productIds: Array<string>;
}

export interface RemoveProductResponseDto {
  removedProductIds: Array<string>;
}
