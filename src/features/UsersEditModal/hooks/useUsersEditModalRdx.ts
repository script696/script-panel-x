import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { usersSlice } from "../../../app/providers/StoreProvider/reducers/users/usersSlice";
import {
  UserCreateMainInfo,
  UserEditMainInfo,
} from "../../../app/providers/StoreProvider/reducers/user/types/typedef";
import {
  createUserThunk,
  editUsersThunk,
  getUsersThunk,
} from "../../../app/providers/StoreProvider/reducers/users/usersThunk";
import { checkIsUserCreateMainInfo } from "../guards/checkIsUserMainInfo";

export const useUsersEditModalRdx = () => {
  const dispatch = useAppDispatch();

  const { toggleEditUserModal } = usersSlice.actions;
  const usersState = useAppSelector((state) => state.usersReducer);

  const handleCloseModal = () => {
    dispatch(toggleEditUserModal(false));
  };

  const handleSubmitUserMainInfo = async (
    userMainInfo: UserEditMainInfo | UserCreateMainInfo
  ) => {
    if (checkIsUserCreateMainInfo(userMainInfo)) {
      await dispatch(createUserThunk(userMainInfo));
      await dispatch(getUsersThunk({ page: 0, rowsPerPage: 8 }));
    } else {
      await dispatch(editUsersThunk(userMainInfo));
    }
  };

  return {
    usersState,
    handleCloseModal,
    handleSubmitUserMainInfo,
  };
};
