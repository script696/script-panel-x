import { Container, Tab, Tabs } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { AppFaq } from "widgets/AppFaq";
import { useTabs } from "shared/hooks/useTabs";
import { FC } from "react";
import { LoginFormValues } from "pages/Login/hooks/useLoginForm";
import BotList from "widgets/LoginTabs/ui/BotList";
import { ALPHA_BOT_CRED, XOMI_BOT_CRED } from "widgets/LoginTabs/constants/constants";
import { useTranslation } from "react-i18next";

type LoginTabsProps = {
  forceSetFormValue: (data: LoginFormValues) => void;
};

const LoginTabs: FC<LoginTabsProps> = ({ forceSetFormValue }) => {
  const { tab, handleClickTab } = useTabs();
  const { t } = useTranslation();

  const handleClickBotCard = (testBot: "xomi" | "alpha" | "request") => {
    if (testBot === "xomi" || testBot === "alpha") {
      const testBotCred = testBot === "xomi" ? XOMI_BOT_CRED : ALPHA_BOT_CRED;
      forceSetFormValue(testBotCred);
    } else {
      window.open("https://t.me/script696", "_blank");
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"} padding={8}>
      <Tabs value={tab} onChange={handleClickTab} centered>
        <Tab label={t("auth.login.tabs.tab_1")} />
        <Tab label={t("auth.login.tabs.tab_2")} />
      </Tabs>
      <Box flexGrow={1} paddingTop={3}>
        {tab === 0 && <BotList onClickBotCard={handleClickBotCard} />}
        {tab === 1 && (
          <Container maxWidth="sm">
            <AppFaq />
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default LoginTabs;
