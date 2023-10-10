import { GetUserDto } from "shared/api/users/dto/GetUserDto";

export type UserViewModel = GetUserDto;

export type UserEditMainInfo = Pick<UserViewModel, "id" | "nikName"> & {
  password?: string;
  botName: string;
  botToken: string;
  appUrl: string;
};

export type UserCreateMainInfo = Pick<UserViewModel, "nikName"> & {
  password: string;
  botName: string;
  botToken: string;
  appUrl: string;
};
