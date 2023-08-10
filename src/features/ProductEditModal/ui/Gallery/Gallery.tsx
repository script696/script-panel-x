import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import DialogContent from "@material-ui/core/DialogContent";
import { Avatar } from "@material-ui/core";
import styles from "./styles.module.css";
import { ProductViewModel } from "../../../../widgets/ProductsTable/types/typedef";
import { FC } from "react";
import { DataWith } from "../../../../shared/types/types";

type GalleryDataProps = DataWith<{
  product?: Pick<ProductViewModel, "images">;
}>;

const Gallery: FC<GalleryDataProps> = ({ data }) => {
  const productGalleryImg = data.product?.images.length
    ? data.product.images
    : ["/img/default_product.png"];

  return (
    <DialogContent>
      <AwesomeSlider cssModule={styles}>
        {productGalleryImg.map((imageSrc) => (
          <div key={imageSrc}>
            <Avatar
              src={imageSrc}
              sx={{ width: "100%", height: "100%" }}
              variant={"square"}
            />
          </div>
        ))}
      </AwesomeSlider>
    </DialogContent>
  );
};

export default Gallery;
