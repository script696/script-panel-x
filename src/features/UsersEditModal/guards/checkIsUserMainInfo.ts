import {
  UserCreateMainInfo,
  UserEditMainInfo,
} from "../../../app/providers/StoreProvider/reducers/user/types/typedef";

export const checkIsUserCreateMainInfo = (
  data: UserEditMainInfo | UserCreateMainInfo
): data is UserCreateMainInfo => {
  return (
    "id" in data &&
    data.id === undefined &&
    "password" in data &&
    typeof data.password === "string"
  );
};
