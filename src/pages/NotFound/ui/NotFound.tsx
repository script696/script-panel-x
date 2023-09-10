import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Result from "shared/components/ResultImage/ResultImage";
import SearchOffOutlinedIcon from "@material-ui/icons/SearchOffOutlined";
import { ROUTES_ADMIN, ROUTES_BASE } from "app/routing";
import { ROUTES_SYSTEM_ADMIN } from "app/routing/constants/routes";
import { useAppSelector } from "app/store";

const NotFound = () => {
  const { t } = useTranslation();
  const { role } = useAppSelector((state) => state.authReducer);

  const redirectUrl =
    role === "admin"
      ? `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.BOT}`
      : role === "system-admin"
      ? `/${ROUTES_BASE.SYSTEM_ADMIN}/${ROUTES_SYSTEM_ADMIN.USERS}`
      : `/${ROUTES_BASE.LOGIN}`;

  return (
    <Result
      extra={
        <Button color="secondary" component={RouterLink} to={redirectUrl} variant="contained">
          {t("common.backHome")}
        </Button>
      }
      image={<SearchOffOutlinedIcon />}
      maxWidth="sm"
      subTitle={t("common.errors.notFound.subTitle")}
      title={t("common.errors.notFound.title")}
    />
  );
};

export default NotFound;
