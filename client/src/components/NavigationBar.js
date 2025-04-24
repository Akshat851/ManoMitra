import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link as MuiLink,
  IconButton,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const NavigationBar = () => {
  const theme = useTheme();
  const navItems = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Articles",
      to: "/",
    },
    {
      text: "Events",
      to: "/",
    },
    {
      text: "Contacts",
      to: "/",
    },
    {
      text: "Chat",
      to: "/",
    },
    {
      text: "Counsellors",
      to: "/",
    },
  ];
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "custom.navbar",
      }}
    >
      <Toolbar
        sx={{
          fontSize: "large",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Box
              sx={{
                p: "10px",
                display: "flex",
                flexDirection: "row",
                gap: 1,
                borderRadius: "50px",
                cursor: "pointer",
                "&:hover": {
                  background: theme.palette.custom.darkHover,
                },
              }}
            >
              {item.text === "Home" && <HomeIcon sx={{ display: "flex" }} />}
              <Typography>{item.text}</Typography>
            </Box>
          ))}
        </Box>
        <Typography sx={{ alignItems: "center" }}>
          Add user profile functionality
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
