import { UpdateProductMainInfoRequestDto } from "shared/api/product/dto/UpdateProductMainInfoDto";
import { ProductCreateMainInfo, ProductEditMainInfo, ProductSecondaryInfo } from "../types/typedef";
import { UpdateProductSecondaryInfoRequestDto } from "shared/api/product/dto/UpdateProductSecondaryInfoDto";

export class ViewModelToApiMapper {
  static createProduct(viewModel: ProductCreateMainInfo): ProductCreateMainInfo {
    return {
      ...viewModel,
      price: viewModel.price * 100,
      discount: viewModel.discount * 100,
    };
  }
  static updateProductMainInfo(viewModel: ProductEditMainInfo): UpdateProductMainInfoRequestDto {
    return {
      ...viewModel,
      productId: viewModel.id,
      price: viewModel.price * 100,
      discount: viewModel.discount * 100,
    };
  }

  static updateSecondaryMainInfo(viewModel: ProductSecondaryInfo): UpdateProductSecondaryInfoRequestDto {
    return {
      ...viewModel,
      productId: viewModel.id,
    };
  }
}
