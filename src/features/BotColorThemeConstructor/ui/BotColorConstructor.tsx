import React, { FC } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useModal } from '../../../shared/hooks/useModal';
import EditableRow from 'shared/components/EditableRow/EditableRow';
import UpdateColorModal from './UpdateColorModal';
import { BG_TO_LABEL_MAP } from '../constants/constants';

const COLOR_THEME_MOCK = {
  bgMain: '#000',
  bgLight: '#000',
  bgDark: '#000',
};

const BotColorThemeConstructor = () => {
  const { isModalOpen, handleOpen, handleClose } = useModal();

  return (
    <EditableRow title={'Color Theme'} onEdit={handleOpen}>
      <Grid container spacing={2}>
        <Grid item xs={4} display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={1}>
          <Typography variant={'h6'}>{BG_TO_LABEL_MAP['bgMain']}</Typography>
          <Box sx={{ background: 'red' }} width={50} height={50} borderRadius={'50%'} />
        </Grid>
        <Grid item xs={4} display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={1}>
          <Typography variant={'h6'}>{BG_TO_LABEL_MAP['bgDark']}</Typography>
          <Box sx={{ background: 'red' }} width={50} height={50} borderRadius={'50%'} />
        </Grid>
        <Grid item xs={4} display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={1}>
          <Typography variant={'h6'}>{BG_TO_LABEL_MAP['bgLight']}</Typography>
          <Box sx={{ background: 'red' }} width={50} height={50} borderRadius={'50%'} />
        </Grid>
      </Grid>
      <UpdateColorModal isModalOpen={isModalOpen} onCloseModal={handleClose} botColorTheme={undefined} />
    </EditableRow>
  );
};

export default BotColorThemeConstructor;
