import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { ProductViewModel } from "app/store/reducers/products/types/typedef";
import { mapProductToView } from "widgets/ProductsTable/utils/productViewMapper";
import { useTableRowActions } from "widgets/ProductsTable/hooks/useTableRowActions";

type ProductsTableRowProps = {
  index: number;
  onCheck: (id: string) => void;
  onDelete: (productIds: string[]) => void;
  onEdit: (product: ProductViewModel) => void;
  processing: boolean;
  selected: boolean;
  product: ProductViewModel;
};

export const ProductsTableRow: FC<ProductsTableRowProps> = ({
  index,
  onCheck,
  onDelete,
  onEdit,
  processing,
  selected,
  product,
}) => {
  const { t } = useTranslation();
  const { id, description, title, amount, brand } = product;

  const labelId = `enhanced-table-checkbox-${index}`;

  const { productMainPhoto, availableSizes, priceWithCurrency, discountWithCurrency } = mapProductToView(product);
  const { anchorEl, openActions, handleOpenActions, handleCloseActions, handleDelete, handleEdit } = useTableRowActions(
    { onEdit, onDelete, product },
  );

  return (
    <TableRow
      aria-checked={selected}
      tabIndex={-1}
      key={product.id}
      selected={selected}
      sx={{ "& td": { bgcolor: "background.paper", border: 0 } }}
    >
      <TableCell padding="checkbox" sx={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}>
        <Checkbox
          color="primary"
          checked={selected}
          inputProps={{
            "aria-labelledby": labelId,
          }}
          onClick={() => onCheck(id)}
        />
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={productMainPhoto} sx={{ mr: 3, width: "50px", height: "50px" }} variant={"rounded"}></Avatar>
          <Box>
            <Typography component="div" variant="h6">
              {title}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {description}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="center">{priceWithCurrency}</TableCell>
      <TableCell align="center">{discountWithCurrency}</TableCell>
      <TableCell align="center">{availableSizes}</TableCell>
      <TableCell align="center">{amount}</TableCell>
      <TableCell align="center">{brand}</TableCell>
      <TableCell align="center">
        {product.disabled ? <Chip label="Disabled" /> : <Chip color="primary" label="Active" />}
      </TableCell>
      <TableCell align="right" sx={{ borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}>
        <IconButton
          id="user-row-menu-button"
          aria-label="user actions"
          aria-controls="user-row-menu"
          aria-haspopup="true"
          aria-expanded={openActions ? "true" : "false"}
          disabled={processing}
          onClick={handleOpenActions}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="user-row-menu"
          anchorEl={anchorEl}
          aria-labelledby="user-row-menu-button"
          open={openActions}
          onClose={handleCloseActions}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleEdit}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>{" "}
            {t("common.edit")}
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>{" "}
            {t("common.delete")}
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};
