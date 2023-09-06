import { Box, Typography } from "@material-ui/core";
import React, { FC } from "react";
import EditableRow from "shared/components/EditableRow/EditableRow";
import UpdateMainInfoModal from "features/BotMainInfoConstructor/ui/UpdateMainInfoModal";
import { useModal } from "shared/hooks/useModal";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { useTranslation } from "react-i18next";

type MainInfoProps = {
  mainInfo?: BotViewModel["mainInfo"];
};

const BotMainInfoConstructor: FC<MainInfoProps> = ({ mainInfo }) => {
  const { t } = useTranslation();
  const { helloText, shopName } = mainInfo || {};
  const { isModalOpen, handleOpen, handleClose } = useModal();

  return (
    <EditableRow title={"Main Info"} onEdit={handleOpen}>
      <Box display={"flex"} flexDirection={"column"} rowGap={1}>
        <Box display={"flex"} columnGap={3}>
          <Typography variant={"h6"}>{t("admin.bot.constructor.main-info.hello-text")}</Typography>
          <Typography variant={"h6"}>-</Typography>
          <Typography variant={"h5"}>{helloText}</Typography>
        </Box>{" "}
        <Box display={"flex"} columnGap={3}>
          <Typography variant={"h6"}>{t("admin.bot.constructor.main-info.shop-name")}</Typography>
          <Typography variant={"h6"}>-</Typography>
          <Typography variant={"h5"}>{shopName}</Typography>
        </Box>
      </Box>

      <UpdateMainInfoModal isProductEditModalOpen={isModalOpen} onCloseModal={handleClose} botMainInfo={mainInfo} />
    </EditableRow>
  );
};

export default BotMainInfoConstructor;
