export interface RemoveProductRequestDto {
  shopId: string;
  productId: string;
}

export interface RemoveProductResponseDto {
  removedProductId: string;
}
