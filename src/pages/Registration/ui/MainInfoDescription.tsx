import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

const MainInfoDescription = () => {
  const { t } = useTranslation();

  return <Typography variant={"h5"}>{t("auth.registration.description.one")}</Typography>;
};

export default MainInfoDescription;
