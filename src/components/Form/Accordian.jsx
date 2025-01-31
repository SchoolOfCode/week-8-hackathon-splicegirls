import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "./Form";
import accordionStyles from "./Form.module.css";

export function FormAccordion() {
  return (
    <Accordion className={accordionStyles.AccordionContainer}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        className={accordionStyles.AccordionHeader}
      >
        <Typography component="span">Open Form</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Form />
      </AccordionDetails>
    </Accordion>
  );
}
