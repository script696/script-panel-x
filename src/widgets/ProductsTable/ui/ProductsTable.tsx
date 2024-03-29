import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import React, { FC } from "react";
import Empty from "shared/components/Empty/Empty";
import * as selectUtils from "shared/utils/selectUtils";
import { ProductsTableRow } from "./ProductsTableRow";
import { ProductsTableHead } from "./ProductsTableHead";
import { checkIsRowSelected } from "../utils/checkIsRowSelected";
import { usePagination } from "shared/hooks/usePagination";
import { ProductViewModel } from "app/store/reducers/products/types/typedef";
import { useProductTableRdx } from "widgets/ProductsTable/hooks/useProductTableRdx";

type ProductsTableProps = {
  onDelete: (productsIds: Array<string>) => void;
  onEdit: (product: ProductViewModel) => void;
  onSelectedChange: (selected: Array<string>) => void;
  selected: Array<string>;
};

const ProductsTable: FC<ProductsTableProps> = ({ onDelete, onEdit, onSelectedChange, selected }) => {
  const { productsState, handleChangePagination } = useProductTableRdx();
  const { handleChangePage, handleChangeRowsPerPage } = usePagination({
    onChangePagination: (params) => handleChangePagination(params),
  });
  const { productsData, productsTable, isLoading } = productsState;
  const { products, total } = productsData;
  const { page, rowsPerPage } = productsTable.pagination;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = selectUtils.selectAll(products);
      onSelectedChange(newSelecteds);
      return;
    }
    onSelectedChange([]);
  };

  const handleClick = (id: string) => {
    const newSelected: string[] = selectUtils.selectOne(selected, id);
    onSelectedChange(newSelected);
  };

  if (products.length === 0) {
    return <Empty title="No products yet" />;
  }

  return (
    <React.Fragment>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          sx={{
            minWidth: 600,
            borderCollapse: "separate",
            borderSpacing: "0 1rem",
          }}
        >
          <ProductsTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={products.length}
          />
          <TableBody>
            {products.map((product, index) => (
              <ProductsTableRow
                index={index}
                key={product.id}
                onCheck={handleClick}
                onDelete={onDelete}
                onEdit={onEdit}
                processing={isLoading}
                selected={checkIsRowSelected(selected, product.id)}
                product={product}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 8, 10]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
};

export default ProductsTable;
