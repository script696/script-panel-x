import React, { FC } from "react";
import LoadingButton from "@material-ui/lab/LoadingButton";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { useNavigate } from "react-router-dom";
import { ROUTES_ADMIN, ROUTES_BASE } from "app/routing";
import { useTranslation } from "react-i18next";

export const SuccessRegistration: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const redirectToApp = () => {
    navigate(`/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.BOT}`, { replace: true });
  };

  return (
    <Box
      marginTop={3}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Typography variant={"h4"}>{t("auth.registration.success.text")}</Typography>
        <ThumbUpAltIcon style={{ color: "#81C784", fontSize: 60 }} />
      </Box>

      <LoadingButton fullWidth variant="contained" sx={{ mt: 3 }} onClick={redirectToApp}>
        {t("auth.registration.success.button")}
      </LoadingButton>
    </Box>
  );
};
