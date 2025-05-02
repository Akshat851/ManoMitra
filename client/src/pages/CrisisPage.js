import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import online_therapist from "../images/online_therapist.png";
import EastIcon from "@mui/icons-material/East";

export const CrisisPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: "20px",
        flex: 1,
      }}
    >
      <Box
        sx={{
          width: 2 / 3,
          display: "flex",
          flexDirection: "row",
          boxShadow: 3,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            color: "primary.main",
            padding: "20px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            backgroundImage: `url(${online_therapist})`,
            backgroundSize: "100% 100%",
          }}
        >
          <Typography variant="h5">
            I would like to speak with a Counsellor on the phone
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Our professional Counsellors are available 24/7
          </Typography>
          <Typography variant="h5">+91 98765-43210</Typography>
        </Box>
        <Box
          sx={{
            gap: 5,
            backgroundColor: "primary.main",
            color: "primary.light",
            padding: "20px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" sx={{ flex: 1, textAlign: "end" }}>
            I would like to message a therapist online
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ flex: 1, textAlign: "end" }}
          >
            Online messaging services open Monday to Friday 8 am to 5 pm
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box
              sx={{
                bgcolor: "primary.light",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                p: 1,
                borderRadius: "4px",
                color: "primary.main",
                cursor: "pointer",
                border: `2px solid ${theme.palette.primary.main}`,
                "&:hover": {
                  border: `2px solid ${theme.palette.primary.light}`,
                  bgcolor: "primary.main",
                  color: "primary.light",
                },
              }}
            >
              Talk to someone
              <EastIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "1.2rem",
          color: "primary.main",
          fontWeight: "bold",
          p: "20px",
        }}
      >
        If you are experiencing a medical emergency, please call 108
      </Typography>
    </Box>
  );
};
