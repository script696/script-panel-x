import { CreateProductResponseDto } from "../../../../../../shared/api/product/dto/CreateProductDto";
import { GetProductsResponseDto } from "../../../../../../shared/api/product/dto/GetProductsDto";

export type ProductsViewModel = GetProductsResponseDto;

export type ProductViewModel = CreateProductResponseDto;

export type ProductEditMainInfo = Omit<
  ProductViewModel,
  "description" | "images"
>;

export type ProductSecondaryInfo = Pick<ProductViewModel, "id" | "description">;

export type ProductCreateMainInfo = Omit<
  ProductViewModel,
  "description" | "images" | "id"
>;
