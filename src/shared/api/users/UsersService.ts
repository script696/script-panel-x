import { $apiClient } from "../client";
import { GetUserDto } from "./dto/GetUserDto";
import { GetUsersRequestDto, GetUsersResponseDto } from "./dto/GetUsersDto";
import { EditUserRequestDto, EditUserResponseDto } from "./dto/EditUserDto";
import {
  RemoveUserRequestDto,
  RemoveUserResponseDto,
} from "./dto/RemoveUserDto";

export class UsersService {
  static getUser() {
    return $apiClient.get<GetUserDto>("users/get-user");
  }

  static getAllUsers(params: GetUsersRequestDto) {
    return $apiClient.get<GetUsersResponseDto>("users/get-users", { params });
  }

  static editUsers(data: EditUserRequestDto) {
    return $apiClient.put<EditUserResponseDto>("users/edit", data);
  }

  static removeUsers(data: RemoveUserRequestDto) {
    return $apiClient.delete<RemoveUserResponseDto>("users/remove", { data });
  }
}
