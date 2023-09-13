import Box from "@material-ui/core/Box/Box";
import EditableRow from "shared/components/EditableRow/EditableRow";
import { useModal } from "shared/hooks/useModal";
import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import UpdateLogoModal from "features/BotLogoConstructor/ui/UpdateLogoModal";
import { useAppSelector } from "app/store";
import { LOGO_FORM_DEFAULT_VALUES } from "features/BotLogoConstructor/constants/constants";
import { useTranslation } from "react-i18next";

type BotLogoConstructorProps = {
  reloadBotFrame: () => void;
};

const BotLogoConstructor: FC<BotLogoConstructorProps> = ({ reloadBotFrame }) => {
  const { t } = useTranslation();
  const { isModalOpen, handleOpen, handleClose } = useModal();

  const { bot } = useAppSelector((state) => state.botReducer);

  const logo = bot?.logo ?? LOGO_FORM_DEFAULT_VALUES;

  return (
    <EditableRow title={t("admin.bot.constructor.logo.title")} onEdit={handleOpen}>
      <Box display={"flex"} columnGap={3} alignItems={"center"}>
        <Typography variant={"h6"}>{t("admin.bot.constructor.logo.description")}</Typography>
        <Typography variant={"h6"}>-</Typography>
        {Boolean(logo.source) && <img src={logo.source} style={{ maxHeight: "50px" }} alt={"bot logo"} />}
      </Box>
      <UpdateLogoModal
        isModalOpen={isModalOpen}
        onCloseModal={handleClose}
        botLogo={logo}
        reloadBotFrame={reloadBotFrame}
      />
    </EditableRow>
  );
};

export default BotLogoConstructor;
