import React, { useState } from "react";
import { ProductViewModel } from "app/store/reducers/products/types/typedef";

type UseTableRowActionsParams = {
  onDelete: (productIds: string[]) => void;
  onEdit: (product: ProductViewModel) => void;
  product: ProductViewModel;
};

export const useTableRowActions = ({
  onEdit,
  onDelete,
  product,
}: UseTableRowActionsParams) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openActions = Boolean(anchorEl);

  const handleOpenActions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseActions = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleCloseActions();
    onDelete([product.id]);
  };

  const handleEdit = () => {
    handleCloseActions();
    onEdit(product);
  };

  return {
    anchorEl,
    openActions,
    handleOpenActions,
    handleCloseActions,
    handleDelete,
    handleEdit,
  };
};
