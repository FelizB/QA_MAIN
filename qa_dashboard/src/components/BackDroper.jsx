import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";

const BackDroper = () => {
  return (
    <Backdrop
      open
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDroper;
