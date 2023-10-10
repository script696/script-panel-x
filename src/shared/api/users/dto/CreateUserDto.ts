export interface CreateUserRequestDto {
  nikName: string;
  password: string;
  botName: string;
  botToken: string;
  appUrl: string;
}

export interface CreateUserResponseDto {
  id: string;
  nikName: string;
  bot: {
    userId: string;
    name: string;
  };
  role: "system-admin" | "admin" | "user";
}
