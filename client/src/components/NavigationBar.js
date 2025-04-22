import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const NavigationBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#333333",
        boxShadow: "0px 0px 5px #1a1a1a",
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          p: "0 20px",
          fontSize: "large",
          fontFamily: "Calibri",
        }}
      >
        <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
          <IconButton>
            <HomeIcon color="primary" />
          </IconButton>

          <MuiLink
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, mx: 1 }}
          >
            Home
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/topics"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, mx: 1 }}
          >
            Articles
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/topics"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, mx: 1 }}
          >
            Events
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/topics"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, mx: 1 }}
          >
            Contacts
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/topics"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, mx: 1 }}
          >
            Chat
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/topics"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, mx: 1 }}
          >
            Counsellors
          </MuiLink>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          Add user profile functionality
        </Box>
      </Toolbar>
    </AppBar>
  );
};
