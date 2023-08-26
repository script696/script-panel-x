export interface SignInRequestDto {
  nikName: string;
  password: string;
}

export interface CreateUserResponseDto {
  status: "success";
}
