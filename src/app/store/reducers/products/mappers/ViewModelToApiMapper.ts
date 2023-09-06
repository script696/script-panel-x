import { UpdateProductMainInfoRequestDto } from "shared/api/product/dto/UpdateProductMainInfoDto";
import { ProductEditMainInfo, ProductSecondaryInfo } from "../types/typedef";
import { UpdateProductSecondaryInfoRequestDto } from "shared/api/product/dto/UpdateProductSecondaryInfoDto";

export class ViewModelToApiMapper {
  static updateProductMainInfo(viewModel: ProductEditMainInfo): UpdateProductMainInfoRequestDto {
    return {
      ...viewModel,
      productId: viewModel.id,
    };
  }

  static updateSecondaryMainInfo(viewModel: ProductSecondaryInfo): UpdateProductSecondaryInfoRequestDto {
    return {
      ...viewModel,
      productId: viewModel.id,
    };
  }
}
