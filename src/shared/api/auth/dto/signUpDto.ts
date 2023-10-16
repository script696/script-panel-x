export interface SignUpRequestDto {
  nikName: string;
  password: string;
  token: string;
}

export interface SignUpResponseDto {
  role: "admin" | "system-admin";
}
