import { CreateProductResponseDto } from "../../../../../../shared/api/product/dto/CreateProductDto";
import { GetProductsResponseDto } from "../../../../../../shared/api/product/dto/GetProductsDto";

export type ProductsViewModel = GetProductsResponseDto;

export type ProductViewModel = CreateProductResponseDto;
