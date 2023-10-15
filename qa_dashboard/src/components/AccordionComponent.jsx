import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDashboardContext } from "../pages/DashboardLayout";

function AccordionComponent({ title, childlings, icon }) {
  const { user } = useDashboardContext();
  const { Role } = user;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(title, Role);
  if (title === "Administration" && Role !== "Admin") return;
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="bigside-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="nav-link">
            <span className="icon">{icon}</span> {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bigside-accordion-body">
          <Typography>{childlings}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
