import { useState } from "react";
import { ProductViewModel } from "../../../widgets/ProductsTable/types/typedef";
import { useSnackbar } from "../../../app/providers/SnackbarProvider";

export const useDeleteProduct = () => {
  const snackbar = useSnackbar();
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState(false);
  const [productForDelCandidate, setProductForDelCandidate] = useState<
    Array<ProductViewModel["id"]>
  >([]);

  const handleDeleteProduct = async () => {
    console.log(productForDelCandidate, "here");
    // deleteUsers(userDeleted)
    //   .then(() => {
    //     snackbar.success(t("userManagement.notifications.deleteSuccess"));
    //     setSelected([]);
    //     setUserDeleted([]);
    //     setOpenConfirmDeleteDialog(false);
    //   })
    //   .catch(() => {
    //     snackbar.error(t("common.errors.unexpected.subTitle"));
    //   });
  };
  const handleCloseConfirmDeleteDialog = () => {
    setIsConfirmDeleteModalOpen(false);
  };

  const handleOpenConfirmDeleteModal = (productsIds: Array<string>) => {
    setProductForDelCandidate(productsIds);
    setIsConfirmDeleteModalOpen(true);
  };

  return {
    handleDeleteProduct,
    isConfirmDeleteModalOpen,
    handleCloseConfirmDeleteDialog,
    handleOpenConfirmDeleteModal,
  };
};
