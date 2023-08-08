import { ProductDto } from "../../../shared/api/dto/product";

export type HeadCell = {
  id: string;
  label: string;
  align: "center" | "left" | "right";
};

export type ProductViewModel = ProductDto;
