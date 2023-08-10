export interface ProductDto {
  id: string;
  images: Array<string>;
  disabled: boolean;
  title: string;
  description: string;
  size: string;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
}
