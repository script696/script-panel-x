import { Box, Dialog, Grid, Typography } from '@material-ui/core';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { BotViewModel } from 'app/store/reducers/bot/types/typedef';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useUpdateMainInfoModalRdx } from 'features/BotMainInfoConstructor/hooks/useUpdateMainInfoModalRdx';
import { BG_TO_LABEL_MAP, COLOR_THEME_FORM_DEFAULT_VALUES } from '../constants/constants';
import { BotApi } from '../../../shared/api/bot/typedef';

type UpdateColorModalProps = {
  isModalOpen: boolean;
  onCloseModal: () => void;
  botColorTheme?: BotViewModel['colorTheme'];
};

const UpdateColorModal: FC<UpdateColorModalProps> = ({ isModalOpen, onCloseModal, botColorTheme }) => {
  // const { handleSubmit, isLoading } = useUpdateMainInfoModalRdx({
  //   onCloseModal,
  // });
  const { t } = useTranslation();

  // const { formik } = useBotMainInfoForm({
  //   t,
  //   botMainInfo,
  //   onSubmit: handleSubmit,
  // });

  const [colorThemeForm, setColorThemeForm] = useState<Record<keyof BotViewModel['colorTheme'], string>>(
    COLOR_THEME_FORM_DEFAULT_VALUES,
  );

  const colors = Object.keys(COLOR_THEME_FORM_DEFAULT_VALUES);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(colorThemeForm);
  };

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setColorThemeForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Dialog open={isModalOpen} onClose={onCloseModal}>
      <DialogTitle id="bot-dialog-title">{t('admin.bot.constructor.main-info.title')}</DialogTitle>
      <Box component={'form'} onSubmit={handleSubmit} noValidate flexGrow={1} display={'flex'} flexDirection={'column'}>
        <DialogContent>
          <Grid container spacing={3}>
            {(colors as Array<keyof BotViewModel['colorTheme']>).map((color, idx) => (
              <Grid item xs={4} display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={1} key={idx}>
                <Typography variant={'h6'} noWrap>
                  {BG_TO_LABEL_MAP[color]}
                </Typography>
                <input
                  name={color}
                  type={'color'}
                  style={{ border: 'none', cursor: 'pointer' }}
                  value={colorThemeForm[color]}
                  onChange={handleChangeColor}
                />
              </Grid>
            ))}
            {/*<Grid item xs={4} display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={1}>*/}
            {/*  <Typography variant={'h6'} noWrap>*/}
            {/*    {BG_TO_LABEL_MAP['bgMain']}*/}
            {/*  </Typography>*/}
            {/*  <input*/}
            {/*    name={'bgMain'}*/}
            {/*    type={'color'}*/}
            {/*    style={{ border: 'none', cursor: 'pointer' }}*/}
            {/*    value={colorThemeForm['bgMain']}*/}
            {/*    onChange={handleChangeColor}*/}
            {/*  />*/}
            {/*</Grid>*/}

            {/*<Grid item xs={4} display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={1}>*/}
            {/*  <Typography variant={'h6'} noWrap>*/}
            {/*    {BG_TO_LABEL_MAP['bgDark']}*/}
            {/*  </Typography>*/}
            {/*  <input*/}
            {/*    name={'bgDark'}*/}
            {/*    type={'color'}*/}
            {/*    style={{ border: 'none', cursor: 'pointer' }}*/}
            {/*    value={colorThemeForm['bgDark']}*/}
            {/*    onChange={handleChangeColor}*/}
            {/*  />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={4} display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={1}>*/}
            {/*  <Typography variant={'h6'} noWrap>*/}
            {/*    {BG_TO_LABEL_MAP['bgLight']}*/}
            {/*  </Typography>*/}
            {/*  <input*/}
            {/*    type={'color'}*/}
            {/*    style={{ border: 'none', cursor: 'pointer' }}*/}
            {/*    value={colorThemeForm['bgLight']}*/}
            {/*    onChange={handleChangeColor}*/}
            {/*  />*/}
            {/*</Grid>*/}
          </Grid>
        </DialogContent>
        <Box sx={{ flexGrow: 1 }} />
        <DialogActions>
          <Button onClick={onCloseModal}>{t('common.cancel')}</Button>
          <LoadingButton loading={false} type="submit" variant="contained">
            {t('common.edit')}
          </LoadingButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default UpdateColorModal;
