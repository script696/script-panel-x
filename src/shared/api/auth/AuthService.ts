import { $apiClient } from "../client";

import { SignInRequestDto, SignInResponseDto } from "./dto/signInDto";
import { CheckAuthResponseDto } from "./dto/checkAuthDto";
import { logoutDto } from "./dto/logoutDto";

export class AuthService {
  static checkAuth() {
    return $apiClient.get<CheckAuthResponseDto>("auth/check");
  }

  static signIn(data: SignInRequestDto) {
    return $apiClient.post<SignInResponseDto>("auth/sign-in", data);
  }

  static logout() {
    return $apiClient.post<logoutDto>("auth/logout");
  }
}
