import { User } from "./User";

export interface EditUserRequestDto extends Pick<User, "id" | "nikName"> {}

export interface EditUserResponseDto extends User {}
