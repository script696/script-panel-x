import { Box } from "@material-ui/core";
import React, { FC } from "react";
import { BotMainInfoConstructor } from "features/BotMainInfoConstructor";
import { BotColorConstructor } from "features/BotColorThemeConstructor";
import { useBotConstructorRdx } from "../hooks/useBotConstructorRdx";
import BotLogoConstructor from "features/BotLogoConstructor/ui/BotLogoConstructor";

type BotConstructorProps = {
  reloadBotFrame: () => void;
};

const BotConstructor: FC<BotConstructorProps> = ({ reloadBotFrame }) => {
  const { botState } = useBotConstructorRdx();
  const { bot } = botState;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <BotMainInfoConstructor mainInfo={bot?.mainInfo} reloadBotFrame={reloadBotFrame} />
      <BotLogoConstructor reloadBotFrame={reloadBotFrame} />
      <BotColorConstructor reloadBotFrame={reloadBotFrame} />
    </Box>
  );
};

export default BotConstructor;
