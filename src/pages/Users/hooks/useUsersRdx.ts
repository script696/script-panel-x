import { ProductViewModel } from "../../../app/providers/StoreProvider/reducers/products/types/typedef";
import {
  getProductsThunk,
  removeProductsThunk,
} from "../../../app/providers/StoreProvider/reducers/products/productThunk";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { productsSlice } from "../../../app/providers/StoreProvider/reducers/products/productsSlice";
import { useEffect } from "react";
import {
  getUsersThunk,
  removeUsersThunk,
} from "../../../app/providers/StoreProvider/reducers/users/usersThunk";
import { UserViewModel } from "../../../app/providers/StoreProvider/reducers/user/types/typedef";
import { usersSlice } from "../../../app/providers/StoreProvider/reducers/users/usersSlice";

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
