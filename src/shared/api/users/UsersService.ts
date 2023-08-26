import { $apiClient } from "../client";
import { GetUserDto } from "./dto/GetUserDto";

export class UsersService {
  static getUser() {
    return $apiClient.get<GetUserDto>("users/get-user");
  }
}
