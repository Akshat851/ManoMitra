import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        p: "15px",
        color: "#686868",
        fontFamily: `"Calibri", "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif`,
        textAlign: "center",
      }}
    >
      <Typography>
        {`Copyright \u00A9 ${new Date().getFullYear()} ManoMitra All rights reserved`}
      </Typography>
    </Box>
  );
};
