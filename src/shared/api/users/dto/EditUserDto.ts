import { User } from "./User";

export interface EditUserRequestDto extends Pick<User, "id" | "nikName"> {
  password?: string;
}

export interface EditUserResponseDto extends User {}
