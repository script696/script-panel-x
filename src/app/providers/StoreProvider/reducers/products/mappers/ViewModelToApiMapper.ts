import { ProductMainInfo } from "../../../../../../features/ProductEditModal/types/typedef";
import { UpdateProductMainInfoRequestDto } from "../../../../../../shared/api/product/dto/UpdateProductMainInfoDto";

export class ViewModelToApiMapper {
  static updateProductMainInfo(
    viewModel: ProductMainInfo
  ): UpdateProductMainInfoRequestDto {
    return {
      ...viewModel,
      productId: viewModel.id,
    };
  }
}
