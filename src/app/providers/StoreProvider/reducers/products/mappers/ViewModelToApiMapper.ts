import { UpdateProductMainInfoRequestDto } from "../../../../../../shared/api/product/dto/UpdateProductMainInfoDto";
import { ProductEditMainInfo } from "../types/typedef";

export class ViewModelToApiMapper {
  static updateProductMainInfo(
    viewModel: ProductEditMainInfo
  ): UpdateProductMainInfoRequestDto {
    return {
      ...viewModel,
      productId: viewModel.id,
    };
  }
}
