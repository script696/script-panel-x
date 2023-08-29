import { User } from "./User";

export interface GetUsersRequestDto {
  page: number;
  rowsPerPage: number;
}

export interface GetUsersResponseDto {
  users: Array<User>;
  total: number;
}
