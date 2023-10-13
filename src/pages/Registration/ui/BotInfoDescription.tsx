import { useTranslation } from "react-i18next";
import { Box, Typography } from "@material-ui/core";

const BOT_DESCRIPTIONS = [
  "auth.registration.description.bot.one",
  "auth.registration.description.bot.two",
  "auth.registration.description.bot.three",
  "auth.registration.description.bot.four",
  "auth.registration.description.bot.five",
];

const BotInfoDescription = () => {
  const { t } = useTranslation();

  return (
    <Box px={5}>
      <Typography variant={"h5"} textAlign={"center"}>
        {t("auth.registration.description.bot.title")}
      </Typography>
      <Box display={"flex"} flexDirection={"column"} marginTop={3} gap={2}>
        {BOT_DESCRIPTIONS.map((description, idx) => (
          <Typography variant={"h6"} key={description}>{`${idx + 1}. ${t(description)}`}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default BotInfoDescription;
