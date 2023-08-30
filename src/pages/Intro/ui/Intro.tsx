import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import IntroLayout from "./IntroLayout";

const Intro = () => {
  const theme = useTheme();

  return (
    <IntroLayout>
      <main>
        <Container sx={{ py: 6 }} maxWidth="md">
          <img
            alt="Application demo"
            src={`img/template-${theme.palette.mode}.png`}
            style={{
              borderRadius: 24,
              borderStyle: "solid",
              borderWidth: 4,
              borderColor: theme.palette.background.default,
              width: "100%",
            }}
          />
        </Container>
        {/*{userInfo ? (*/}
        {/*  <Button component={RouterLink} to={`admin`} variant="contained">*/}
        {/*    {t("landing.cta.mainAuth", { name: userInfo.firstName })}*/}
        {/*  </Button>*/}
        {/*) : (*/}
        {/*  <Button*/}
        {/*    component={RouterLink}*/}
        {/*    to={`/${process.env.PUBLIC_URL}/login`}*/}
        {/*    variant="contained"*/}
        {/*  >*/}
        {/*    {t("landing.cta.main")}*/}
        {/*  </Button>*/}
        {/*)}*/}
      </main>
    </IntroLayout>
  );
};

export default Intro;
