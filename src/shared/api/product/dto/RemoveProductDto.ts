export interface RemoveProductRequestDto {
  productIds: Array<string>;
}

export interface RemoveProductResponseDto {
  removedProductIds: Array<string>;
}
