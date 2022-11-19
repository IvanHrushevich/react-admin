import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { FC } from "react";

import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question 1.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nobis odit accusamus, minima cumque corporis recusandae ullam
            nesciunt distinctio vitae perferendis maxime magnam exercitationem,
            fuga delectus possimus incidunt! Soluta, dicta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question 2.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nobis odit accusamus, minima cumque corporis recusandae ullam
            nesciunt distinctio vitae perferendis maxime magnam exercitationem,
            fuga delectus possimus incidunt! Soluta, dicta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question 3.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nobis odit accusamus, minima cumque corporis recusandae ullam
            nesciunt distinctio vitae perferendis maxime magnam exercitationem,
            fuga delectus possimus incidunt! Soluta, dicta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question 4.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nobis odit accusamus, minima cumque corporis recusandae ullam
            nesciunt distinctio vitae perferendis maxime magnam exercitationem,
            fuga delectus possimus incidunt! Soluta, dicta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question 5.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nobis odit accusamus, minima cumque corporis recusandae ullam
            nesciunt distinctio vitae perferendis maxime magnam exercitationem,
            fuga delectus possimus incidunt! Soluta, dicta.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
