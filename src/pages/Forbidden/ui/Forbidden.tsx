import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Result from "shared/components/ResultImage/ResultImage";
import ForbiddenSvg from "@material-ui/icons/GppBadOutlined";

const Forbidden = () => {
  const { t } = useTranslation();

  return (
    <Result
      extra={
        <Button color="secondary" component={RouterLink} to={`/${process.env.PUBLIC_URL}/admin`} variant="contained">
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
