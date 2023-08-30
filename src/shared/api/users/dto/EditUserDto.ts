import { User } from "./User";

export interface EditUserRequestDto extends Pick<User, "id" | "nikName"> {
  password?: string;
  botName: string;
}

export type EditUserResponseDto = User
