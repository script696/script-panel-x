import { GetUserDto } from "../../../../../../shared/api/users/dto/GetUserDto";

export type UserViewModel = GetUserDto;

export type UserEditMainInfo = Pick<UserViewModel, "id" | "nikName">;
export type UserCreateMainInfo = Pick<UserViewModel, "nikName">;
