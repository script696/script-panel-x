export interface RemoveUserRequestDto {
  usersIds: Array<string>;
}

export interface RemoveUserResponseDto {
  removedUserId: string;
}
