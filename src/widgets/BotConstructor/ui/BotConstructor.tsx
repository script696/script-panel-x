import { Box } from '@material-ui/core';
import React from 'react';
import { BotMainInfoConstructor } from 'features/BotMainInfoConstructor';
import { useBotConstructorRdx } from 'widgets/BotConstructor/hooks/useBotConstructorRdx';
import BotColorConstructor from '../../../features/BotColorThemeConstructor/ui/BotColorConstructor';

const BotConstructor = () => {
  const { botState } = useBotConstructorRdx();
  const { bot } = botState;

  return (
    <Box display={'flex'} flexDirection={'column'} gap={7}>
      <BotMainInfoConstructor mainInfo={bot?.mainInfo} />
      <BotColorConstructor />
    </Box>
  );
};

export default BotConstructor;
