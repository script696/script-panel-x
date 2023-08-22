import React, { FC, useState } from "react";
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
import { ProductViewModel } from "../../../app/providers/StoreProvider/reducers/products/types/typedef";
import { UsersViewModel } from "../../../app/providers/StoreProvider/reducers/users/types/typedef";

type ProductsTableRowProps = {
  index: number;
  onCheck: (id: string) => void;
  onDelete: (productIds: string[]) => void;
  onEdit: (user: UsersViewModel) => void;
  processing: boolean;
  selected: boolean;
  user: UsersViewModel;
};

export const UsersTableRow: FC<ProductsTableRowProps> = ({
  index,
  onCheck,
  onDelete,
  onEdit,
  processing,
  selected,
  user,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const { id, nickname, shopName } = user;
  const apiUrl = process.env["REACT_APP_API_URL"];

  const labelId = `enhanced-table-checkbox-${index}`;
  const openActions = Boolean(anchorEl);
  // const productMainPhoto = images?.length
  //   ? `${apiUrl}/${images[0].source}`
  //   : "/img/default_product.png";

  // const availableSizes =
  //   product.availableSizes.length <= 2
  //     ? product.availableSizes.join(" ")
  //     : `${product.availableSizes.slice(2).join(" ")} ...`;

  const handleOpenActions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseActions = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleCloseActions();
    onDelete([id]);
  };

  const handleEdit = () => {
    handleCloseActions();
    onEdit(user);
  };
  console.log(shopName, "shopName");
  return (
    <TableRow
      aria-checked={selected}
      tabIndex={-1}
      key={user.id}
      selected={selected}
      sx={{ "& td": { bgcolor: "background.paper", border: 0 } }}
    >
      <TableCell
        padding="checkbox"
        sx={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}
      >
        <Checkbox
          color="primary"
          checked={selected}
          inputProps={{
            "aria-labelledby": labelId,
          }}
          onClick={() => onCheck(id)}
        />
      </TableCell>
      <TableCell align="center">{nickname}</TableCell>
      <TableCell align="center">{shopName}</TableCell>
      <TableCell
        align="right"
        sx={{ borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}
      >
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
