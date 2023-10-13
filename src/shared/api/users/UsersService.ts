import { $apiClient } from "../client";
import { GetUserDto } from "./dto/GetUserDto";
import { GetUsersRequestDto, GetUsersResponseDto } from "./dto/GetUsersDto";
import { EditUserRequestDto, EditUserResponseDto } from "./dto/EditUserDto";
import { RemoveUserRequestDto, RemoveUserResponseDto } from "./dto/RemoveUserDto";
import { CreateUserRequestDto, CreateUserResponseDto } from "./dto/CreateUserDto";
import { CheckUserExistRequestDto, CheckUserExistResponseDto } from "./dto/CheckUserExistDto";

export class UsersService {
  static getUser() {
    return $apiClient.get<GetUserDto>("users/get-user");
  }

  static getAllUsers(params: GetUsersRequestDto) {
    return $apiClient.get<GetUsersResponseDto>("users/get-users", { params });
  }

  static createUser(reqData: CreateUserRequestDto) {
    return $apiClient.post<CreateUserResponseDto>("users/create", reqData);
  }

  static editUsers(data: EditUserRequestDto) {
    return $apiClient.put<EditUserResponseDto>("users/edit", data);
  }

  static removeUsers(data: RemoveUserRequestDto) {
    return $apiClient.delete<RemoveUserResponseDto>("users/remove", { data });
  }

  static checkUserExist(data: CheckUserExistRequestDto) {
    return $apiClient.post<CheckUserExistResponseDto>("users/check-user-exist", data);
  }
}
