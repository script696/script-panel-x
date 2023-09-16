import { ImageApi } from "../typedef";

export interface ProductApi {
  id: string;
  title: string;
  description: string;
  images: Array<ImageApi>;
  disabled: boolean;
  availableSizes: Array<string>;
  amount: number;
  brand: string;
  price: number;
  discount: number;
  currency: "RUB" | "USD";
}
