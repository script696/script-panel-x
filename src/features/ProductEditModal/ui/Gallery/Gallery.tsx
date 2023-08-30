import DialogContent from "@material-ui/core/DialogContent";
import { Avatar, Box } from "@material-ui/core";
import React, { FC } from "react";
import { useGalleryImages } from "../../hooks/useGalleryImages";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import DialogActions from "@material-ui/core/DialogActions";
import { useTranslation } from "react-i18next";
import { avatarSx, boxSx, deleteButtonSx } from "./stylesSx";
import { ProductViewModel } from "../../../../app/store/reducers/products/types/typedef";
import { AddProductImagesRequestDto } from "../../../../shared/api/product/dto/AddProductImagesDto";
import { RemoveProductImageRequestDto } from "../../../../shared/api/product/dto/RemoveProductImagesDto";

type GalleryDataProps = {
  onClose: () => void;
  isLoading: boolean;
  product?: Pick<ProductViewModel, "images" | "id">;
  onAddProductImages: (data: AddProductImagesRequestDto) => void;
  onDeleteProductImage: (data: RemoveProductImageRequestDto) => void;
};

const Gallery: FC<GalleryDataProps> = (props) => {
  const { t } = useTranslation();
  const { onClose, product, onAddProductImages, onDeleteProductImage } = props;

  const {
    handleLoadImage,
    galleryImages,
    handleDeleteImg,
    deletedImagesCandidates,
    files,
  } = useGalleryImages({
    defaultImages: product?.images,
  });
  const withAddImage = [
    ...galleryImages,
    { source: "/img/default_product.png" },
  ];

  const handleSaveChanges = () => {
    if (!product) return;

    if (files.length) {
      onAddProductImages({ files, productId: product.id });
    }
    if (deletedImagesCandidates.length) {
      onDeleteProductImage({
        productId: product.id,
        imagesSources: deletedImagesCandidates,
      });
    }
  };

  const apiUrl = process.env["REACT_APP_API_URL"];

  return (
    <Box
      flexGrow={1}
      display={"flex"}
      flexDirection={"column"}
      overflow={"hidden"}
    >
      <DialogContent>
        <Box display={"flex"} flexDirection={"column"} rowGap={3}>
          {withAddImage.map(({ source }, idx) => {
            const isLastElem = idx === withAddImage.length - 1;

            const apiImgSource = source.startsWith("blob")
              ? source
              : `${apiUrl}/${source}`;

            return !isLastElem ? (
              <Box position={"relative"} sx={boxSx} key={source}>
                <Avatar
                  id={source}
                  src={apiImgSource}
                  style={avatarSx}
                  variant={"square"}
                />
                <LoadingButton
                  className={"test"}
                  sx={deleteButtonSx}
                  loading={false}
                  variant={"contained"}
                  type="button"
                  color="error"
                  onClick={() => handleDeleteImg(source)}
                >
                  Remove image
                </LoadingButton>
              </Box>
            ) : (
              <Button
                type={"button"}
                variant={"text"}
                sx={{ cursor: "pointer" }}
              >
                <label className={"button"}>
                  <input
                    multiple
                    hidden
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    onChange={handleLoadImage}
                  />
                  <Avatar
                    id={source}
                    src={source}
                    style={avatarSx}
                    variant={"square"}
                  />
                </label>
              </Button>
            );
          })}
        </Box>
      </DialogContent>
      <Box sx={{ flexGrow: 1 }} />
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <LoadingButton
          type="button"
          variant="contained"
          onClick={handleSaveChanges}
        >
          Save changes
        </LoadingButton>
      </DialogActions>
    </Box>
  );
};

export default Gallery;
