import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Result from "shared/components/ResultImage/ResultImage";
import ForbiddenSvg from "@material-ui/icons/GppBadOutlined";
import { useAppSelector } from "app/store";
import { ROUTES_ADMIN, ROUTES_BASE } from "app/routing";
import { ROUTES_SYSTEM_ADMIN } from "app/routing/constants/routes";

const Forbidden = () => {
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
      image={<ForbiddenSvg />}
      maxWidth="sm"
      subTitle={t("common.errors.forbidden.subTitle")}
      title={t("common.errors.unexpected.title")}
    />
  );
};

export default Forbidden;
