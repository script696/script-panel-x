import { Box } from "@material-ui/core";
import React from "react";
import { BotMainInfoConstructor } from "features/BotMainInfoConstructor";
import { BotColorConstructor } from "features/BotColorThemeConstructor";
import { useBotConstructorRdx } from "../hooks/useBotConstructorRdx";
import BotLogoConstructor from "features/BotLogoConstructor/ui/BotLogoConstructor";

const BotConstructor = () => {
  const { botState } = useBotConstructorRdx();
  const { bot } = botState;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <BotMainInfoConstructor mainInfo={bot?.mainInfo} />
      <BotLogoConstructor />
      <BotColorConstructor />
    </Box>
  );
};

export default BotConstructor;
