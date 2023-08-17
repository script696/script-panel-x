import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../app/providers/AuthProvider/AuthProvider";
import { ReactComponent as WelcomeSvg } from "../../shared/assets/welcome.svg";
import SvgContainer from "../../shared/components/SvgContainer/SvgContainer";

const WelcomeWidget = () => {
  const { userInfo } = useAuth();
  const { t } = useTranslation();

  return (
    <Card elevation={0} sx={{ backgroundColor: "transparent", mb: 2 }}>
      <CardContent>
        <Typography component="div" gutterBottom variant="h1">
          {t("admin.home.welcome.title", { name: userInfo?.firstName })}
        </Typography>
        <Typography
          component="div"
          sx={{ fontWeight: 300, mb: 3 }}
          variant="h1"
        >
          {t("admin.home.welcome.subTitle")}
        </Typography>
        <Typography
          color="textSecondary"
          component="p"
          gutterBottom
          marginBottom={2}
          variant="subtitle1"
        >
          {t("admin.home.welcome.message")}
        </Typography>
        <SvgContainer>
          <WelcomeSvg />
        </SvgContainer>
      </CardContent>
    </Card>
  );
};

export default WelcomeWidget;
