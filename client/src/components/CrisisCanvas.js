import { Avatar, Box, Typography, useTheme } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import phone from "../images/phone.jpg";
import online_support from "../images/online_support.jpg";
import { Link } from "react-router-dom";

const AvatarWithLabel = ({ src, label }) => (
  <Box flex={1} display="flex" flexDirection="column" alignItems="center">
    <Avatar
      src={src}
      sx={{
        width: 65,
        height: 65,
        borderRadius: "50%",
        margin: 1,
        border: "3px solid white",
      }}
    />
    <Box>{label}</Box>
  </Box>
);

export const CrisisCanvas = () => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      <Typography
        flex={2}
        alignContent="center"
        px={3}
        fontSize="1.5rem"
        color="primary.light"
      >
        Are you currently experiencing a crisis?
      </Typography>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box display="flex" flexDirection="row" mb={2} color="primary.light">
          <AvatarWithLabel src={phone} label="Phone" />
          <AvatarWithLabel src={online_support} label="Online" />
        </Box>
        <Box
          bgcolor="primary.light"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
          p={1}
          borderRadius="4px"
          color="primary.main"
          sx={{
            textDecoration: "none",
            border: `2px solid ${theme.palette.primary.main}`,
            "&:hover": {
              border: `2px solid ${theme.palette.primary.light}`,
              bgcolor: "primary.main",
              color: "primary.light",
            },
          }}
          component={Link}
          to="/crisis"
        >
          Get help now
          <EastIcon />
        </Box>
      </Box>
    </Box>
  );
};
