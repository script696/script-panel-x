import { ImageDto } from "../../../shared/api/dto/common";
import { ProductViewModel } from "../../../app/providers/StoreProvider/reducers/products/types/typedef";

export type GalleryImage = ImageDto;

export type ProductEditMainInfo = Omit<
  ProductViewModel,
  "description" | "images"
>;

export type ProductCreateMainInfo = Omit<
  ProductViewModel,
  "description" | "images" | "id"
>;
