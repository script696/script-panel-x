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

export const useProductsRdx = () => {
  // const {
  //   openEditProductModal,
  //   toggleDeleteProductModal,
  //   deleteProducts,
  //   changeSelectedRows,
  // } = productsSlice.actions;

  const usersState = useAppSelector((state) => state.usersReducer);
  const dispatch = useAppDispatch();

  const { usersTable } = usersState;
  const { pagination, selectedRows } = usersTable;

  const handleAddNewProduct = () => {
    // dispatch(openEditProductModal());
  };

  const handleCloseDeleteProductModel = () => {
    // dispatch(toggleDeleteProductModal(false));
  };

  const handleEditProduct = (product: ProductViewModel) => {
    // dispatch(openEditProductModal(product));
  };

  const handleDeleteProducts = (productsIds: Array<string>) => {
    // dispatch(deleteProducts(productsIds));
  };

  const handleCancelSelected = () => {
    // dispatch(changeSelectedRows([]));
  };

  const handleChangeSelectedRows = (selectedRows: Array<string>) => {
    // dispatch(changeSelectedRows(selectedRows));
  };

  const handleConfirmDeleteRows = async () => {
    // await dispatch(
    //   removeProductsThunk({ shopId: "1", productIds: selectedRows })
    // );
    // await dispatch(getProductsThunk(pagination));
  };

  useEffect(() => {
    // dispatch(getProductsThunk(pagination));
  }, [pagination]);

  return {
    usersState,
    handleAddNewProduct,
    handleCloseDeleteProductModel,
    handleEditProduct,
    handleDeleteProducts,
    handleCancelSelected,
    handleChangeSelectedRows,
    handleConfirmDeleteRows,
  };
};
