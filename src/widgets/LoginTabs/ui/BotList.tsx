import { Button, Grid, Typography } from "@material-ui/core";
import BotCard from "widgets/LoginTabs/ui/BotCard";
import SmartToyOutlinedIcon from "@material-ui/icons/SmartToyOutlined";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import Box from "@material-ui/core/Box";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type BotListProps = {
  onClickBotCard: (testBot: "xomi" | "alpha" | "request") => void;
};

const BotList: FC<BotListProps> = ({ onClickBotCard }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant={"h4"} align={"center"}>
        {t("auth.login.bot-list.title")}
      </Typography>
      <Grid container mt={3} spacing={2}>
        <Grid item xs={4}>
          <BotCard title={"Script Alpha Bot"} icon={SmartToyOutlinedIcon} iconColor={"#81C784"}>
            <Button variant={"contained"} fullWidth onClick={() => onClickBotCard("alpha")}>
              {t("common.choose_me")}
            </Button>
          </BotCard>
        </Grid>
        <Grid item xs={4}>
          <BotCard title={"Script Xomi Bot"} icon={SmartToyOutlinedIcon} iconColor={"#FFD54F"}>
            <Button variant={"contained"} fullWidth onClick={() => onClickBotCard("xomi")}>
              {t("common.choose_me")}
            </Button>
          </BotCard>
        </Grid>
        <Grid item xs={4}>
          <BotCard title={t("auth.login.bot-list.req-bot")} icon={FlashOnIcon} iconColor={"#FF8A65"}>
            <Button variant={"outlined"} fullWidth onClick={() => onClickBotCard("request")}>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                {t("common.send_req")} <CallMadeIcon sx={{ width: "20px", height: "20px" }} />
              </Box>
            </Button>
          </BotCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BotList;
