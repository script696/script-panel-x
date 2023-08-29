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
import { getUsersThunk } from "../../../app/providers/StoreProvider/reducers/users/usersThunk";
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

  const handleAddNewProduct = () => {
    // dispatch(openEditProductModal());
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
    console.log(selectedRows, "selectedRows");
    // await dispatch(
    //   removeProductsThunk({ shopId: "1", productIds: selectedRows })
    // );
    // await dispatch(getProductsThunk(pagination));
  };

  useEffect(() => {
    dispatch(getUsersThunk(pagination));
  }, [pagination]);

  return {
    usersState,
    handleAddNewProduct,
    handleCloseDeleteProductModel,
    handleEditUser,
    handleDeleteUsers,
    handleCancelSelected,
    handleChangeSelectedRows,
    handleConfirmDeleteRows,
  };
};
