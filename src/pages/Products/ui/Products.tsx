import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../../../shared/components/AdminAppBar/AdminAppBar";
import { ProductsTable } from "../../../widgets/ProductsTable";
import { TableToolbar } from "../../../widgets/TableToolbar";
import { ProductEditModal } from "../../../features/ProductEditModal";
import { useSelectRows } from "../../../shared/hooks/useSelectRows";
import ConfirmDeleteModal from "../../../shared/components/ConfirmDeleteModal/ConfirmDeleteModal";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { useProducts } from "../hooks/useProducts";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { getProductsThunk } from "../../../app/providers/StoreProvider/reducers/products/productThunk";
import { productsSlice } from "../../../app/providers/StoreProvider/reducers/products/productsSlice";
import { ProductViewModel } from "../../../app/providers/StoreProvider/reducers/products/types/typedef";

const Products = () => {
  const { t } = useTranslation();
  const processing = false;

  const { selectedRows, handleCancelSelected, handleSelectedChange } =
    useSelectRows();

  const dispatch = useAppDispatch();
  const { openEditProductModal, toggleEditProductModal } =
    productsSlice.actions;

  const { productTablePagination, ui, productToAddCandidate } = useAppSelector(
    (state) => state.productReducer
  );

  const { isProductEditModalOpen } = ui;

  useEffect(() => {
    dispatch(getProductsThunk(productTablePagination));
  }, [productTablePagination]);

  const {
    handleDeleteProduct,
    isConfirmDeleteModalOpen,
    handleCloseConfirmDeleteDialog,
    handleOpenConfirmDeleteModal,
  } = useDeleteProduct();

  // const {
  //   handleOpenProductEditModal,
  //   handleCloseProductEditModal,
  //   handleAddProduct,
  //   handleUpdateProduct,
  //   isProductEditOpen,
  //   productCandidate,
  // } = useAddEditProduct();

  const { handleReqOnPaginationChange } = useProducts();

  const handleAddNewProduct = () => {
    dispatch(openEditProductModal());
  };

  const handleEditProduct = (product: ProductViewModel) => {
    dispatch(openEditProductModal(product));
  };

  const handleCloseProductEditModal = () => {
    dispatch(toggleEditProductModal(false));
  };

  return (
    <React.Fragment>
      <AdminAppBar>
        <TableToolbar
          isLoading={processing}
          onAddNewRow={handleAddNewProduct}
          onCancelSelecting={handleCancelSelected}
          onDeleteSelected={handleOpenConfirmDeleteModal}
          selectedRows={selectedRows}
        />
      </AdminAppBar>
      <ProductsTable
        processing={processing}
        onDelete={handleOpenConfirmDeleteModal}
        onEdit={handleEditProduct}
        onSelectedChange={handleSelectedChange}
        onPaginationChangeReq={handleReqOnPaginationChange}
        selected={selectedRows}
      />
      <ConfirmDeleteModal
        description={t("userManagement.confirmations.delete")}
        pending={processing}
        onClose={handleCloseConfirmDeleteDialog}
        onConfirm={handleDeleteProduct}
        open={isConfirmDeleteModalOpen}
        title={t("common.confirmation")}
      />
      <ProductEditModal />
    </React.Fragment>
  );
};

export default Products;
