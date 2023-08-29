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
  const {
    openEditProductModal,
    toggleDeleteProductModal,
    deleteProducts,
    changeSelectedRows,
  } = productsSlice.actions;

  const productsState = useAppSelector((state) => state.productReducer);
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
    await dispatch(removeProductsThunk({ productIds: selectedRows }));
    await dispatch(getProductsThunk(pagination));
  };

  useEffect(() => {
    dispatch(getProductsThunk(pagination));
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
