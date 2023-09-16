import { ProductsViewModel } from "../types/typedef";
import { GetProductsResponseDto } from "shared/api/product/dto/GetProductsDto";

export class ApiToViewModelMapper {
  static getProducts(apiModel: GetProductsResponseDto): ProductsViewModel {
    const mappedProducts = apiModel.products.map((product) => {
      return { ...product, price: product.price / 100, discount: product.discount / 100 };
    });
    return { total: apiModel.total, products: mappedProducts };
  }
}
