import {
  UserCreateMainInfo,
  UserEditMainInfo,
} from "../../../app/providers/StoreProvider/reducers/user/types/typedef";

export const checkIsUserMainInfo = (
  data: UserEditMainInfo | UserCreateMainInfo
): data is UserCreateMainInfo => {
  return (
    "id" in data && "password" in data && typeof data.password === "string"
  );
};
