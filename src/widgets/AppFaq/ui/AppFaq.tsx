import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import React from "react";
import { Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { QUESTIONS } from "widgets/AppFaq/constants/constants";

const AppFaq = () => {
  const { t } = useTranslation();

  return (
    <Box>
      {QUESTIONS.map((question, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="p" variant="h6">
              {t(question.title)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingTop: "0" }}>
            <Typography color="text.secondary">{t(question.answer)}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AppFaq;
