export interface SignInRequestDto {
  nikName: string;
  password: string;
}

export interface SignInResponseDto {
  role: "admin" | "system-admin";
}
