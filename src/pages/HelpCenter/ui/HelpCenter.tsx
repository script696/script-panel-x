import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HelpIcon from "@material-ui/icons/Help";
import MailIcon from "@material-ui/icons/Mail";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import AdminAppBar from "shared/components/AdminAppBar/AdminAppBar";
import AdminToolbar from "shared/components/AdminToolbar/AdminToolbar";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { Box } from "@material-ui/core";

const HelpCenter = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title={t("admin.help-center.title")} />
      </AdminAppBar>
      <Container maxWidth="xs" sx={{ mt: 3 }}>
        <Box display={"flex"} justifyContent={"center"}>
          <HelpOutlineOutlinedIcon style={{ width: "200px", height: "200px" }} />
        </Box>
      </Container>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={6}>
          <Card>
            <CardActionArea component={RouterLink} to={`/${process.env.PUBLIC_URL}/admin/faq`}>
              <CardHeader
                avatar={
                  <Avatar aria-label="FAQ icon">
                    <HelpIcon />
                  </Avatar>
                }
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {t("admin.help-center.faq")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea component="a" href={`https://t.me/script696`} target={"_blank"}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Mail icon">
                    <MailIcon />
                  </Avatar>
                }
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {t("admin.help-center.contact")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HelpCenter;
