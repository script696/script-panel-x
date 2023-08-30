import { useAppDispatch, useAppSelector } from "app/store";
import { useEffect } from "react";
import {
  getUsersThunk,
  removeUsersThunk,
} from "app/store/reducers/users/usersThunk";
import { UserViewModel } from "app/store/reducers/user/types/typedef";
import { usersSlice } from "app/store/reducers/users/usersSlice";

export const useUsersRdx = () => {
  const {
    openEditUserModal,
    toggleDeleteUserModal,
    deleteUsers,
    changeSelectedRows,
  } = usersSlice.actions;

  const usersState = useAppSelector((state) => state.usersReducer);
  const dispatch = useAppDispatch();

  const { usersTable } = usersState;
  const { pagination, selectedRows } = usersTable;

  const handleAddNewUser = () => {
    dispatch(openEditUserModal());
  };

  const handleCloseDeleteProductModel = () => {
    dispatch(toggleDeleteUserModal(false));
  };

  const handleEditUser = (user: UserViewModel) => {
    dispatch(openEditUserModal(user));
  };

  const handleDeleteUsers = (usersIds: Array<string>) => {
    dispatch(deleteUsers(usersIds));
  };

  const handleCancelSelected = () => {
    dispatch(changeSelectedRows([]));
  };

  const handleChangeSelectedRows = (selectedRows: Array<string>) => {
    dispatch(changeSelectedRows(selectedRows));
  };

  const handleConfirmDeleteRows = async () => {
    await dispatch(removeUsersThunk({ usersIds: selectedRows }));
    await dispatch(getUsersThunk(pagination));
  };

  useEffect(() => {
    dispatch(getUsersThunk(pagination));
  }, [pagination]);

  return {
    usersState,
    handleAddNewUser,
    handleCloseDeleteProductModel,
    handleEditUser,
    handleDeleteUsers,
    handleCancelSelected,
    handleChangeSelectedRows,
    handleConfirmDeleteRows,
  };
};
