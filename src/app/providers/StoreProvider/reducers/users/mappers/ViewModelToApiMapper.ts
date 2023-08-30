import { EditUserRequestDto } from "../../../../../../shared/api/users/dto/EditUserDto";

export class ViewModelToApiMapper {
  static editUsers(viewModel: EditUserRequestDto): EditUserRequestDto {
    return {
      ...viewModel,
      password: viewModel.password === "****" ? undefined : viewModel.password,
    };
  }
}
