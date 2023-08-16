import React from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../../../shared/components/AdminAppBar/AdminAppBar";
import { ProductsTable } from "../../../widgets/ProductsTable";
import { PRODUCTS_MOCK } from "../../../shared/mocks/products";
import { TableToolbar } from "../../../widgets/TableToolbar";
import { ProductEditModal } from "../../../features/ProductEditModal";
import { useSelectRows } from "../../../shared/hooks/useSelectRows";
import ConfirmDeleteModal from "../../../shared/components/ConfirmDeleteModal/ConfirmDeleteModal";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { useAddEditProduct } from "../hooks/useAddEditProduct";
import { useProducts } from "../hooks/useProducts";

// const { addUser, isAdding } = useAddUser();
// const { deleteUsers, isDeleting } = useDeleteUsers();
// const { data } = useGetProducts();
// const { isUpdating, updateUser } = useUpdateProductMainInfo();

const Products = () => {
  const { t } = useTranslation();
  const processing = false;

  const { selectedRows, handleCancelSelected, handleSelectedChange } =
    useSelectRows();

  const {
    handleDeleteProduct,
    isConfirmDeleteModalOpen,
    handleCloseConfirmDeleteDialog,
    handleOpenConfirmDeleteModal,
  } = useDeleteProduct();

  const {
    handleOpenProductEditModal,
    handleCloseProductEditModal,
    handleAddProduct,
    handleUpdateProduct,
    isProductEditOpen,
    productCandidate,
  } = useAddEditProduct();

  const { handleReqOnPaginationChange } = useProducts();

  return (
    <React.Fragment>
      <AdminAppBar>
        <TableToolbar
          isLoading={processing}
          onAddNewRow={handleOpenProductEditModal}
          onCancelSelecting={handleCancelSelected}
          onDeleteSelected={handleOpenConfirmDeleteModal}
          selectedRows={selectedRows}
        />
      </AdminAppBar>
      <ProductsTable
        processing={processing}
        onDelete={handleOpenConfirmDeleteModal}
        onEdit={handleOpenProductEditModal}
        onSelectedChange={handleSelectedChange}
        onPaginationChangeReq={handleReqOnPaginationChange}
        selected={selectedRows}
        products={PRODUCTS_MOCK}
      />
      <ConfirmDeleteModal
        description={t("userManagement.confirmations.delete")}
        pending={processing}
        onClose={handleCloseConfirmDeleteDialog}
        onConfirm={handleDeleteProduct}
        open={isConfirmDeleteModalOpen}
        title={t("common.confirmation")}
      />
      <ProductEditModal
        onAdd={handleAddProduct}
        onClose={handleCloseProductEditModal}
        onUpdate={handleUpdateProduct}
        open={isProductEditOpen}
        processing={processing}
        product={productCandidate}
      />
    </React.Fragment>
  );
};

export default Products;
