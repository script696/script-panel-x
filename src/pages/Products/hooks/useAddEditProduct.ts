import { useState } from "react";
import { useSnackbar } from "../../../app/providers/SnackbarProvider/SnackbarProvider";
import { ProductViewModel } from "../../../app/providers/StoreProvider/reducers/products/types/typedef";

export const useAddEditProduct = () => {
  const snackbar = useSnackbar();
  const [isProductEditOpen, setIsProductEditOpen] = useState(false);
  const [productCandidate, setProductCandidate] = useState<
    ProductViewModel | undefined
  >(undefined);

  const handleAddProduct = async (product: Partial<ProductViewModel>) => {
    // addUser(user as ProductViewModel)
    //   .then(() => {
    //     snackbar.success(
    //       t("userManagement.notifications.addSuccess", {
    //         user: `${user.firstName} ${user.lastName}`,
    //       })
    //     );
    //     setOpenUserDialog(false);
    //   })
    //   .catch(() => {
    //     snackbar.error(t("common.errors.unexpected.subTitle"));
    //   });
  };

  const handleUpdateProduct = async (product: ProductViewModel) => {
    console.log("update");
    // updateUser(user)
    //   .then(() => {
    //     snackbar.success(
    //       t("userManagement.notifications.updateSuccess", {
    //         user: `${user.firstName} ${user.lastName}`,
    //       })
    //     );
    //     setOpenUserDialog(false);
    //   })
    //   .catch(() => {
    //     snackbar.error(t("common.errors.unexpected.subTitle"));
    //   });
  };

  const handleCloseProductEditModal = () => {
    setProductCandidate(undefined);
    setIsProductEditOpen(false);
  };

  const handleOpenProductEditModal = (product?: ProductViewModel) => {
    setProductCandidate(product);
    setIsProductEditOpen(true);
  };

  return {
    handleOpenProductEditModal,
    handleCloseProductEditModal,
    handleAddProduct,
    handleUpdateProduct,
    isProductEditOpen,
    productCandidate,
  };
};
