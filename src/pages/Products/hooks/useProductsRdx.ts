import { ProductViewModel } from "app/store/reducers/products/types/typedef";
import {
  getProductsThunk,
  removeProductsThunk,
} from "app/store/reducers/products/productThunk";
import { useAppDispatch, useAppSelector } from "app/store";
import { productsSlice } from "app/store/reducers/products/productsSlice";
import { useEffect } from "react";

export const useProductsRdx = () => {
  const {
    openEditProductModal,
    toggleDeleteProductModal,
    deleteProducts,
    changeSelectedRows,
  } = productsSlice.actions;

  const productsState = useAppSelector((state) => state.productReducer);
  const { user } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const { productsTable } = productsState;
  const { pagination, selectedRows } = productsTable;

  const handleAddNewProduct = () => {
    dispatch(openEditProductModal());
  };

  const handleCloseDeleteProductModel = () => {
    dispatch(toggleDeleteProductModal(false));
  };

  const handleEditProduct = (product: ProductViewModel) => {
    dispatch(openEditProductModal(product));
  };

  const handleDeleteProducts = (productsIds: Array<string>) => {
    dispatch(deleteProducts(productsIds));
  };

  const handleCancelSelected = () => {
    dispatch(changeSelectedRows([]));
  };

  const handleChangeSelectedRows = (selectedRows: Array<string>) => {
    dispatch(changeSelectedRows(selectedRows));
  };

  const handleConfirmDeleteRows = async () => {
    if (!user) return;
    await dispatch(removeProductsThunk({ productIds: selectedRows }));
    await dispatch(getProductsThunk({ ...pagination, botName: user.bot.name }));
  };

  useEffect(() => {
    if (!user) return;
    dispatch(getProductsThunk({ ...pagination, botName: user.bot.name }));
  }, [pagination]);

  return {
    productsState,
    handleAddNewProduct,
    handleCloseDeleteProductModel,
    handleEditProduct,
    handleDeleteProducts,
    handleCancelSelected,
    handleChangeSelectedRows,
    handleConfirmDeleteRows,
  };
};
