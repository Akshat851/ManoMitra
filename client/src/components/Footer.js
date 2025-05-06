import React from "react";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Typography
      sx={{
        p: "15px",
        color: "text.secondary",
        textAlign: "center",
      }}
    >
      {`Copyright \u00A9 ${new Date().getFullYear()} ManoMitra All rights reserved`}
    </Typography>
  );
};
