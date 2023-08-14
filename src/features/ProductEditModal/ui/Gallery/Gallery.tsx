import DialogContent from "@material-ui/core/DialogContent";
import { Avatar, Box } from "@material-ui/core";
import { ProductViewModel } from "../../../../widgets/ProductsTable/types/typedef";
import React, { FC } from "react";
import { DataWith } from "../../../../shared/types/types";
import { useGalleryImages } from "../../hooks/useGalleryImages";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import DialogActions from "@material-ui/core/DialogActions";
import { useTranslation } from "react-i18next";
import { avatarSx, boxSx, deleteButtonSx } from "./stylesSx";

type GalleryDataProps = DataWith<{
  onClose: () => void;
  processing: boolean;
  product?: Pick<ProductViewModel, "images">;
  isEditMode: boolean;
}>;

const Gallery: FC<GalleryDataProps> = ({ data }) => {
  const { t } = useTranslation();
  const { processing, onClose, isEditMode } = data;

  const handleDeleteImageRequest = (imgId: string) => {
    return Promise.resolve();
  };

  const {
    handleLoadImage,
    galleryImages,
    handleDeleteImg,
    deletedImages,
    files,
  } = useGalleryImages({
    defaultImages: data.product?.images,
  });

  const withAddImage = [
    ...galleryImages,
    { source: "/img/default_product.png" },
  ];

  const handleSaveChanges = () => {
    console.log(files);
    console.log(deletedImages);
  };

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

            return !isLastElem ? (
              <Box position={"relative"} sx={boxSx} key={source}>
                <Avatar
                  id={source}
                  src={source}
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
                    hidden
                    accept="image/*"
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
