import { Box, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
export const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        m: "10px",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          flex: 6,
          bgcolor: "#ffffff",
          m: "10px",
          p: "10px",
        }}
      >
        Trending posts in your network
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 4,
          m: "10px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            bgcolor: "#0d6797",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ flex: 2, alignContent: "center", px: "20px" }}>
            Are you currently experiencing a crisis?
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              p: "10px",
            }}
          >
            <Box
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box sx={{ flex: 1 }}>img1</Box>
              <Box sx={{ flex: 1 }}>img2</Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                bgcolor: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              Get help now
              <EastIcon />
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            flex: 2,
            bgcolor: "#ffffff",
            mt: "20px",
            p: "10px",
          }}
        >
          Trending Keywords
        </Typography>
      </Box>
    </Box>
  );
};
